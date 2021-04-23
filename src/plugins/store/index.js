const Vue = window.Vue
const Vuex = window.Vuex

Vue.use(Vuex)

const isMobile = () => document.body.clientWidth <= 991;
import StorageUtil from "@/plugins/util/storage-util"

const store = new Vuex.Store({
    strict: process.env.NODE_ENV === 'development', // 生产模式不要使用严格模式，否则影响性能
    state: {
        isMobile: isMobile(), // 判断是否移动端，根据element响应式断点判断
        asideMenuIsCollapsed: isMobile(), // 侧边菜单是否折叠，web下展开，mobile下折叠
        activeMenuName: StorageUtil.getItem('__active_menu_name')
    },
    mutations: {
        adjustMobile(state) {
            state.isMobile = isMobile();
        },
        collapseMenu(state, collapse = !state.asideMenuIsCollapsed) { // 折叠/展开菜单
            state.asideMenuIsCollapsed = Boolean(collapse);
        },
        setActiveMenuName(state, menuName) {
            state.activeMenuName = menuName;
            StorageUtil.setItem('__active_menu_name', menuName);
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
