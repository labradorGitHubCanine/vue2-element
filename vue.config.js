module.exports = {
    productionSourceMap: false,
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'axios': 'axios',
            'element-ui': 'ElementUI',
            'lottie': 'lottie',
            'introJs': 'introJs'
        }
    }
}

