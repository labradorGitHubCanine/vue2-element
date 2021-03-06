<template>
    <div>
        <p>
            axios的配置文件在src\plugins\axios\index.js
            使用方法：
        </p>
        <h1>1、GET、DELETE请求</h1>
        <p>this.$axios.get(uri, {params: params})</p>
        <p>this.$axios.delete(uri, {params: params})</p>
        <h1>2、POST、PUT请求</h1>
        <p>this.$axios.post(uri, params)</p>
        <p>this.$axios.put(uri, params)</p>
        <h1>3、文件上传</h1>
        <p>this.$axios.post(uri, formData, {contentType: 'multipart/form-data'})</p>
        <h1>4、文件下载</h1>
        <p>this.$axios.get(uri, {params: params, responseType: 'blob'})</p>
        <h1>5、解释</h1>
        <p>封装的工具类的大概职责如下</p>
        <ol>
            <li>qs.stringify格式化参数。</li>
            <li>返回数据根据约定好的json格式判断code值，作出相应的响应，比如弹出错误信息、跳转到登录页面等。</li>
            <li>解析下载文件的文件名称进行下载。</li>
        </ol>
        <p>具体看一下代码就知道了，码字比较累。</p>
    </div>
</template>
<script>
    export default {}
</script>
