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
    // configureWebpack:  {
    //     externals: {
    //         'vue': 'Vue',
    //         'vue-router': 'VueRouter',
    //         'axios': 'axios',
    //         'element-ui': 'ElementUI',
    //         'lottie': 'lottie',
    //         'introJs': 'introJs',
    //         'highcharts': 'highcharts',
    //         'highcharts-vue': 'highcharts-vue'
    //     }
    // },
    configureWebpack: config => {
        // 生产环境配置
        if (process.env.NODE_ENV === 'production') {

            // 消除 console 输出信息
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true

            // Gzip 压缩
            const CompressionPlugin = require('compression-webpack-plugin')
            config.plugins.push(
                new CompressionPlugin({
                    algorithm: 'gzip',  //
                    test: /\.(js|css|woff|woff2|svg)$/, // 哪些文件会被压缩
                    threshold: 10240, // 对超过10k的数据压缩
                    deleteOriginalAssets: false, // 不删除压缩前的文件，如果浏览器不支持 Gzip ,则会加载源文件
                    minRatio: 0.8 // 压缩比大于 0.8 的文件将不会被压缩
                })
            )

            // 将 js 文件夹添加时间戳，这样浏览器不会加载上个版本缓存的代码
            config.output.filename = `js/[name].${timeStamp}.js`
            config.output.chunkFilename = `js/[name].${timeStamp}.js`

        } else {
            // 开发环境配置
        }
        return {
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
    },
}

