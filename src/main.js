const Vue = window.Vue
import App from './App.vue'
import router from '@/plugins/router'

import '@/assets/css/global.css'
import '@/assets/css/element-variables.scss'

Vue.config.productionTip = false

console.log(window.Vue)

Vue.use(window.ELEMENT, {
    size: 'small'
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
