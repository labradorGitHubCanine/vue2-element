<template>
    <el-aside class="hidden-sm-and-down">
        <el-menu :collapse="collapse" unique-opened :default-active="$route.name" @select="select">
            <sub-menu v-for="(i, j) in menus" :key="j" :index="j" :menu="i"></sub-menu>
        </el-menu>
        <el-button type="text" @click="collapse=!collapse">缩放</el-button>
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
            StorageUtil.setItem('__menus', JSON.stringify(this.menus));
        }
    }
</script>
<style scoped>
    .el-menu:not(.el-menu--collapse) {
        width: 192px !important;
    }

    aside {
        width: auto !important;
    }
</style>
