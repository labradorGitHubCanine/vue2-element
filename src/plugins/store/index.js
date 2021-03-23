const Vue = window.Vue
const Vuex = window.Vuex

Vue.use(Vuex)

const isMobile = () => document.body.clientWidth <= 991;

const store = new Vuex.Store({
    strict: true,
    state: {
        isMobile: isMobile(), // 判断是否移动端，根据element响应式断点判断
        asideMenuIsCollapsed: isMobile(), // 侧边菜单是否折叠，web下展开，mobile下折叠
    },
    mutations: {
        adjustMobile(state) {
            state.isMobile = isMobile();
        },
        collapseMenu(state, collapse = !state.asideMenuIsCollapsed) { // 折叠/展开菜单
            state.asideMenuIsCollapsed = Boolean(collapse);
        }
    }
})

window.onresize = () => {
    if (store.state.isMobile !== isMobile()) {
        if (store.state.isMobile) // 状态变换前是mobile，说明是从mobile切换回web，此时菜单保持打开状态
            store.commit('collapseMenu', false);
        store.commit('adjustMobile');
    }
}

export default store
