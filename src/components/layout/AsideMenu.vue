<template>
    <el-aside>

        <!-- 桌面端菜单 -->
        <template v-if="!isMobile">
            <el-header style="display: flex; align-items: center"></el-header>
            <el-scrollbar>
                <el-menu :collapse="isCollapsed" unique-opened :default-active="$route.name" @select="select"
                         :background-color="backgroundColor"
                         :text-color="textColor"
                         :active-text-color="activeTextColor">
                    <sub-menu v-for="(i, j) in menus" :key="j" :index="j" :menu="i"></sub-menu>
                </el-menu>
            </el-scrollbar>
        </template>

        <!-- 移动端菜单 -->
        <el-drawer v-else :visible.sync="isDrawerOpen" direction="ltr" :size="256" :with-header="false">
            <el-header style="display: flex; align-items: center"></el-header>
            <el-scrollbar>
                <el-menu unique-opened :default-active="$route.name" @select="select"
                         :background-color="backgroundColor"
                         :text-color="textColor"
                         :active-text-color="activeTextColor">
                    <sub-menu v-for="(i, j) in menus" :key="j" :index="j" :menu="i"></sub-menu>
                </el-menu>
            </el-scrollbar>
        </el-drawer>

    </el-aside>
</template>
<script>
    import menus from '@/assets/json/menus.json'
    import StorageUtil from "@/plugins/util/storage-util";
    import SubMenu from "@/components/layout/SubMenu";

    const {mapState} = window.Vuex;

    export default {
        components: {SubMenu},
        data() {
            return {
                menus: menus,
                backgroundColor: '#001529',
                textColor: 'hsla(0, 0%, 100%, .65)',
                activeTextColor: '#fff',
            }
        },
        computed: {
            isDrawerOpen: {
                get() {
                    return !this.$store.state.asideMenuIsCollapsed;
                },
                set() {
                    this.$store.commit('collapseMenu');
                }
            },
            ...mapState({
                isMobile: 'isMobile',
                isCollapsed: 'asideMenuIsCollapsed'
            })
        },
        methods: {
            select(index, indexPath) {
                console.log(indexPath);
                this.$router.push({name: index});
                if (this.isMobile)
                    this.$store.commit('collapseMenu');
            }
        },
        created() {
            this.$router.add(this.menus);
            if (this.$route.name === 'main') { // 如果当前页面是main，说明没有加载任何页面，则自动跳转到第一个菜单
                let first = this.$router.getRoutes().find(e => e.parent && e.parent.name === 'main');
                if (first)
                    this.$router.replace({name: first.name});
            }
            StorageUtil.setItem('__menus', JSON.stringify(this.menus));
        }
    }
</script>
<style scoped lang="scss">

    @import "src/assets/css/element-variables";

    aside {
        background-color: #001529;
        width: auto !important;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #eee;
        box-shadow: 2px 0 8px rgba(29, 35, 41, .05);
    }

    .el-menu {
        border: none;
        overflow-x: hidden;

        &:not(.el-menu--collapse) {
            width: 192px;
        }

        /* 一级菜单全是56px，二级item50px，二级下拉菜单又是56px，给它统一一下都是56px */
        ::v-deep .el-menu-item,
        ::v-deep .el-submenu__title {
            height: 56px;
        }
    }

    ::v-deep .el-menu-item,
    ::v-deep .el-submenu__title,
    ::v-deep .el-tooltip { /* el-tooltip是菜单折叠起来后菜单图标的上级容器，给它也一起内容居中了，不然折叠切换时会上下抖动 */
        display: flex !important;
        align-items: center; /* 菜单的字有点往下歪，修正一下 */

        &:hover {
            background-color: #2c3e50 !important;

            span {
                color: #fff;
            }
        }

        &.is-active {
            background-color: $--color-primary !important;
        }
    }

    /* 由于sub-menu组件外层包裹了div，在收缩状态下，拥有子菜单的菜单仍然会显示文字和下拉箭头，所以用样式修复一下*/
    ::v-deep .el-menu--collapse {
        span, .el-submenu__icon-arrow {
            display: none;
        }
    }

    /* 移动端抽屉菜单的相关样式 */
    ::v-deep .el-drawer__body {
        overflow: auto;
        background-color: #001529;

        .el-menu {
            width: 100%;
        }
    }

</style>
