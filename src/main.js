const Vue = window.Vue
import App from './App.vue'
import router from '@/plugins/router'

Vue.config.productionTip = false

Vue.use(window.ELEMENT, {
    size: 'small'
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
