const Vue = window.Vue
const VueRouter = window.VueRouter
import JsonUtil from "@/plugins/util/json-util"
import StorageUtil from "@/plugins/util/storage-util"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/login'},
        {name: 'login', path: '/login', component: () => import('@/pages/Login'), meta: {title: '登录'}},
        {name: 'main', path: '/main', component: () => import('@/pages/Main'), children: []},
        {name: '404', path: '*', component: () => import('@/pages/error/404')}
    ]
})

const added = [];
router.add = menus => {
    menus.forEach(e => {
        if (e.children && e.children.length > 0) {
            router.add(e.children);
        } else if (e.page && !added.includes(e.page.toLowerCase())) {
            added.push(e.page.toLowerCase());
            router.addRoute('main', {
                name: e.page.toLowerCase(),
                path: e.page.toLowerCase(),
                meta: {
                    title: e.title,
                    isMenu: true
                },
                component: () => import('@/pages/index/' + e.page)
            });
        }
    });
}

// 刷新页面时，重新添加动态路由
router.add(JsonUtil.parseArray(StorageUtil.getItem('__menus')));

// 路由监听
router.beforeEach((to, from, next) => {
    document.title = to.meta?.title || '';
    next();
})

// 重复路由跳转防报错
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(e => e)
}
// replace
VueRouter.prototype.replace = function push(location) {
    return originalReplace.call(this, location).catch(e => e)
}

export default router
