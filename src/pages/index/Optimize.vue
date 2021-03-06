<template>
    <div>
        <p>
            对于spa应用，首页加载速度永远是一个绕不开的话题。
            在jsp时代，我们并不关心这个问题，因为dom结构在服务端已经渲染好，
            浏览器只需接收渲染好的html字符串，顶多再加载一下jquery或bootstrap等框架。
        </p>
        <p>
            而到了spa时代，所有的逻辑都需要丢给前端来处理，所以各种打包好的js累加了巨大的体积，
            在有较好网速的情况下，仍需要十几秒的首页加载时间。更不用说在一些弱网环境下的速度了。
        </p>
        <p>
            因此对于项目体积的优化是势在必行的， 优化体积主要有以下几个方面：
        </p>
        <ol>
            <li>UI组件按需引入</li>
            <li>组件、路由懒加载</li>
            <li>通过CDN获取资源，而不是打包到项目中</li>
            <li>关闭sourcemap文件打包</li>
            <li>Gzip压缩</li>
            <li>SSR服务端渲染</li>
        </ol>

        <h1>1、按需引入</h1>
        <p>只引入需要用到的组件、而不是全局引入。element-ui官网已经写得很详细了，这里就不多说了。</p>

        <h1>2、组件、路由懒加载</h1>
        <p>
            组件懒加载：
        </p>
        <p>
            路由懒加载：
        </p>

        <h1>3、CDN获取资源</h1>
        <p>CDN通常具有更快的加载速度，而且不会受限于同源域名10个最大并行加载的限制。</p>
        <p>在脚手架中使用使用cdn需要在vue.config.js配置externals。</p>
        <p>国内常用的CDN资源有jsdeliver、cdnjs、unpkg。更多cdn可以去百度看看，本项目用的是jsdeliver。</p>
        <p>不过使用cdn毕竟有一些风险，毕竟是第三方的网站，不可控因素有很多。所以可以把js包下载下来放在项目里，再写一段脚本，若cdn加载失败，则加载项目中的js。</p>
        <h1>4、关闭sourcemap文件打包</h1>
        <p>map文件主要是用来精准定位程序出错的位置的，在生产环境基本用不到，所有可以关闭掉。</p>
        <p>关闭方法vue.config.js设置productionSourceMap:false即可</p>
        <h1>5、Gzip压缩</h1>
        <p>Gzip压缩对于加载速度的影响也比较大，其原理就是在服务端将js文件压缩，传输到浏览器后再解压缩，可以节省js文件传输的时间。</p>
        <p>开启Gzip压缩需要以下步骤</p>
        <ol>
            <li>
                安装压缩工具npm i compression-webpack-plugin@1.1.12 --save-dev
                <p>别用高版本的compression-webpack-plugin，会有未知错误</p>
            </li>
            <li>在vue.config.js中配置压缩规则
                <el-input type="textarea" autosize readonly value="
    module.exports = {
    ......
        // Webpack 函数式配置
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
        },
        ......
    }"></el-input>
            </li>
            <li>
                nginx开启Gzip压缩
                <el-input type="textarea" autosize readonly value="
    server {
        ......
        # 开启gzip
        gzip on;

        # 压缩的文件类型
        gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png font/ttf font/otf image/svg+xml;

        # 是否在 http header中添加 Vary: Accept-Encoding 建议开启
        gzip_vary on;
        ......
    }
            "></el-input>
            </li>
        </ol>
        <h1>6、SSR服务端渲染</h1>
        <p>
            看完一些SSR相关文章后感觉配置异常复杂，学习成本比较高。
            作为一个后端人员优化到这里我已经觉得比较满意了，以后有时间再研究吧。
        </p>
    </div>

</template>
