import router from '@/plugins/router'
import JsonUtil from "@/plugins/util/json-util";
import StorageUtil from "@/plugins/util/storage-util";

const axios = window.axios
const {Message, MessageBox} = window.ELEMENT
const qs = require('querystring');

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ?
    'http://118.25.11.58:8080/' :
    'http://118.25.11.58:8080/'

axios.defaults.timeout = 8000; // 超时时间，毫秒
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = false;

// 请求拦截器
axios.interceptors.request.use(
    config => {
        config.headers.token = StorageUtil.getItem('token');
        if (config.headers['Content-Type'] !== 'multipart/form-data') {
            if (['post', 'put'].includes(config.method))
                config.data = qs.stringify(config.data);
            if (['get', 'delete'].includes(config.method))
                config.paramsSerializer = e => qs.stringify(e);
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
axios.interceptors.response.use(
    async res => {
        let result = res.data;
        if (res.config.responseType === 'blob') { // 是一个下载文件的请求
            try {
                await readBlob(res); // 等待读取文件内容
                return Promise.resolve(); // 没有报错信息，说明下载正常，直接返回
            } catch (e) {
                result = e; // 有报错信息，覆盖result，继续进行判断
            }
        }

        let code = +result.code;
        let msg = result.msg;
        let data = result.data;
        let token = res.headers.token;
        if (token)
            StorageUtil.setItem('token', token);

        switch (code) {
            case 1: // 成功
                if (['post', 'put', 'delete'].includes(res.config.method))
                    Message.success({message: msg, showClose: true});
                return Promise.resolve(data);
            case 0: // 失败
                Message.error({message: msg, showClose: true});
                return Promise.reject(msg);
            case 1000: // 重新登录
                MessageBox.alert(msg).then(() => router.push({name: 'login'}));
                return Promise.reject(msg);
            default:
                msg = '不支持的状态码code=' + code;
                Message.error({message: msg, showClose: true});
                return Promise.reject(msg);
        }
    },
    error => {
        console.log(error.code);
        console.log(error.response);
        Message.error(error.message);
        return Promise.reject(error);
    }
);

// 在一个下载文件的请求中，若下载正常，则返回一个Blob文件流，可以直接window.URL.createObjectURL(res.data)进行下载
// 但如果下载失败，有报错信息，我们是无法直接判断出是否有这种情况，因此需要通过FileReader读取Blob文件内容
// 判断如果Blob文件转换为字符串后如果是一个JSONObject则说明有报错，此时应停止下载，根据报错内容执行相应的动作
const readBlob = (res) => {
    return new Promise((resolve, reject) => {
        let data = res.data;
        let reader = new FileReader();
        reader.onload = e => {
            if (JsonUtil.isObject(e.target.result)) { // 是JSON说明有报错信息
                reject(JSON.parse(String(e.target.result)));
            } else { // 不是JSON说明正常下载
                let filename = res.headers['content-disposition'].split('filename=')[1] || 'data';
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(data);
                link.setAttribute('download', filename);
                link.click();
                resolve();
            }
        }
        reader.readAsText(data);
    });
}

export default axios
