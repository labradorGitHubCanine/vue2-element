<template>
    <el-aside>
        <el-menu :collapse="collapse">
            <sub-menu v-for="(i, j) in menus" :key="j" :index="j" :menu="i"></sub-menu>
        </el-menu>
        <el-button @click="collapse=!collapse">缩放</el-button>
    </el-aside>
</template>
<script>
    import menus from '@/assets/json/menus.json'
    import SubMenu from "@/components/layout/SubMenu";

    export default {
        components: {SubMenu},
        data() {
            return {
                menus: menus,
                collapse: false
            }
        }
    }
</script>
<style scoped>
    >>> .el-menu:not(.el-menu--collapse) {
        width: 192px !important;
    }

    aside {
        width: auto !important;
        overflow-x: hidden !important;
    }
</style>