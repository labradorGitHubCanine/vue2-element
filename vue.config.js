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
                    threshold: 10240, // 超过多大的文件才进行压缩，单位b
                    deleteOriginalAssets: false, // 不删除压缩前的文件，如果浏览器不支持 Gzip ,则会加载源文件
                    minRatio: 0.8 // 压缩比大于 多少的文件不会被压缩 范围0-1，0表示都不压缩，1表示全部压缩
                    // 由于解压缩也需要耗时，所以较小的文件或压缩比率不大的文件不需要压缩
                })
            )

            let time = new Date().getTime()
            // 将 js 文件夹添加时间戳，这样浏览器不会加载上个版本缓存的代码
            config.output.filename = `js/[name].${time}.js`
            config.output.chunkFilename = `js/[name].${time}.js`
        }
    }
}
