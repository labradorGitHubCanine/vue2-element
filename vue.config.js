module.exports = {
    chainWebpack: config => {
        // 移除 prefetch 插件
        // 配置了路由懒加载之后，依旧是在首屏加载所有资源信息
        // vue 默认为所有被懒加载的路由使用了 prefetch(预先加载模块)，提前获取用户未来可能会访问的内容
        // chunk-vendors.js加载之后，其他配置了路由懒加载的页面基本不会影响首屏加载的速度
        // 当然比如在移动端或对流量比较敏感的场景，我们也可以将默认的prefetch关闭
        config.plugins.delete('prefetch')
    },
    productionSourceMap: false,
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'axios': 'axios',
            'element-ui': 'ElementUI',
            'lottie': 'lottie',
            'introJs': 'introJs',
            'highcharts': 'highcharts',
            'highcharts-vue': 'highcharts-vue'
        }
    }
}

