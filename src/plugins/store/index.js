const Vue = window.Vue

const isMobile = () => document.body.clientWidth <= 991;

export const store = Vue.observable({
    isMobile: isMobile(), // 是否移动端，根据element的响应式断点判断的
    asideMenuIsCollapse: isMobile(), // 侧边菜单是否折叠
})

export const mutations = {
    collapseMenu(collapse) {
        store.asideMenuIsCollapse = collapse === undefined ? !store.asideMenuIsCollapse : !!collapse;
    }
}

window.onresize = () => {
    if (store.isMobile !== isMobile()) {
        if (store.isMobile) // 从mobile切换回web，才能不能折叠
            store.asideMenuIsCollapse = false;
        store.isMobile = isMobile();
    }
}
