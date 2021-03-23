const Vue = window.Vue
import App from './App.vue'
import router from '@/plugins/router'
import store from '@/plugins/store'
import axios from '@/plugins/axios'

import '@/assets/css/global.css'
import '@/assets/css/element-variables.scss'

Vue.config.productionTip = false

Vue.use(window.ELEMENT, {
    size: 'small'
})

Vue.prototype.$axios = axios

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
