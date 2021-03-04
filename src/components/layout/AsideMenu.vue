<template>
    <el-aside id="aside-menu">

        <!-- 桌面端菜单 -->
        <template v-if="!isMobile">
            <el-header></el-header>
            <el-scrollbar>
                <el-menu :collapse="isCollapse" unique-opened :default-active="$route.name" @select="select">
                    <sub-menu v-for="(i, j) in menus" :key="j" :index="j" :menu="i"></sub-menu>
                </el-menu>
            </el-scrollbar>
        </template>

        <!-- 移动端菜单 -->
        <el-drawer v-else :visible.sync="isDrawerOpen" direction="ltr" :size="256" :with-header="false">
            <el-header></el-header>
            <el-menu unique-opened :default-active="$route.name" @select="select">
                <sub-menu v-for="(i, j) in menus" :key="j" :index="j" :menu="i"></sub-menu>
            </el-menu>
        </el-drawer>

    </el-aside>
</template>
<script>
    import menus from '@/assets/json/menus.json'
    import SubMenu from "@/components/layout/SubMenu";
    import StorageUtil from "@/plugins/util/storage-util";
    import {mutations, store} from "@/plugins/store";

    export default {
        components: {SubMenu},
        data() {
            return {
                menus: menus
            }
        },
        computed: {
            isMobile() {
                return store.isMobile;
            },
            isCollapse() {
                return store.asideMenuIsCollapse;
            },
            isDrawerOpen: {
                get() {
                    return !store.asideMenuIsCollapse;
                },
                set() {
                    mutations.collapseMenu();
                }
            }
        },
        methods: {
            select(index, indexPath) {
                console.log(indexPath);
                this.$router.push({name: index});
                if (this.isMobile)
                    mutations.collapseMenu();
            }
        },
        created() {
            // this.$loading({spinner: 'null'});
            this.$router.add(this.menus);
            if (this.$route.name === 'main') { // 如果当前页面是main，说明没有加载任何页面，则自动加载第一个菜单
                let first = this.$router.getRoutes().find(e => {
                    return e.parent && e.parent.name === 'main';
                });
                if (first)
                    this.$router.push({name: first.name});
            }
            StorageUtil.setItem('__menus', JSON.stringify(this.menus));
        }
    }
</script>
<style scoped>
    aside {
        width: auto !important;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #eee;
        box-shadow: 2px 0 8px rgba(29, 35, 41, .05);
    }

    .el-menu:not(.el-menu--collapse) {
        width: 192px;
    }

    .el-menu {
        border: none;
        overflow-x: hidden;
    }

    >>> .el-menu-item,
    >>> .el-submenu__title { /* 菜单的字有点往下歪，修正一下 */
        display: flex;
        align-items: center;
    }

    /* 由于sub-menu组件外层包裹了div，在收缩状态下，拥有子菜单的菜单仍然会显示文字和下拉箭头，所以用样式修复一下*/
    >>> .el-menu--collapse span,
    >>> .el-menu--collapse .el-submenu__icon-arrow {
        display: none;
    }

    /* 移动端抽屉菜单的相关样式 */
    >>> .el-drawer__body {
        overflow: auto;
    }

    .el-drawer__body .el-menu {
        width: 100%;
    }

</style>
