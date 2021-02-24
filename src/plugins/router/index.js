const Vue = window.Vue
const VueRouter = window.VueRouter

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
                component: () => import('@/pages/' + e.page)
            });
        }
    });
}

export default router
