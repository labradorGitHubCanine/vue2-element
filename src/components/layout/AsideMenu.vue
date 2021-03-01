<template>
    <el-aside class="hidden-sm-and-down">
        <el-header></el-header>
        <el-scrollbar>
            <el-menu :collapse="collapse" unique-opened :default-active="$route.name" @select="select">
                <sub-menu v-for="(i, j) in menus" :key="j" :index="j" :menu="i"></sub-menu>
            </el-menu>
        </el-scrollbar>
        <el-footer>
            <div style="width: 20px; height: 20px; font-size: 20px">
                <i style="cursor: pointer" :class="'el-icon-s-' + (collapse ? 'unfold' : 'fold')" @click="collapse=!collapse"></i>
            </div>
        </el-footer>
    </el-aside>
</template>
<script>
    import menus from '@/assets/json/menus.json'
    import SubMenu from "@/components/layout/SubMenu";
    import StorageUtil from "@/plugins/util/storage-util";

    export default {
        components: {SubMenu},
        data() {
            return {
                menus: menus,
                collapse: false
            }
        },
        methods: {
            select(index, indexPath) {
                console.log(indexPath);
                this.$router.push({name: index});
            }
        },
        created() {
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
    .el-menu:not(.el-menu--collapse) {
        width: 192px;
    }

    .el-menu {
        border: none;
        overflow-x: hidden;
    }

    aside {
        width: auto !important;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #eee;
        box-shadow: 2px 0 8px rgba(29, 35, 41, .05);
    }

    footer {
        display: flex;
        align-items: center;
    }
</style>
