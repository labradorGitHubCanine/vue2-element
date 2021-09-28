const Vue = window.Vue
import App from './App.vue'
import router from '@/plugins/router'
import store from '@/plugins/store'
import axios from '@/plugins/axios'

import '@/assets/css/global.css'
import '@/assets/css/element-variables.scss'

import vueToPdf from 'vue-to-pdf';

Vue.use(vueToPdf);

Vue.config.productionTip = false

Vue.use(window.ELEMENT, {
    size: 'small'
})

// https://cn.vuejs.org/v2/guide/custom-directive.html
Vue.directive('disco', {
    bind(el, binding) { // 指令第一次绑定到元素时调用
        setInterval(() => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            el.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }, binding.value || 1000);
        if (binding.modifiers.resize) {
            setInterval(() => {
                let width = 100 - Math.random() * 50;
                let height = 100 - Math.random() * 50;
                el.style.width = width + 'px';
                el.style.height = height + 'px';
            }, 100);
        }
        if (binding.modifiers.spin) {
            let i = 0;
            setInterval(() => {
                el.style.transform = `rotate(${2 * i++}deg)`;
            }, 1);
        }
    },
    inserted() { // 被绑定元素插入父节点时调用
    },
    update() { // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
    },
    componentUpdated() { // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
    },
    unbind() { // 指令与元素解绑时调用
    }
});

Vue.prototype.$axios = axios

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
