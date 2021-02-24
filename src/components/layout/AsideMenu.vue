<template>
    <el-aside>
        <el-menu>
            <sub-menu v-for="(i, j) in menus" :key="j" :index="j" :menu="i"></sub-menu>
        </el-menu>
    </el-aside>
</template>
<script>
    import menus from '@/assets/json/menus.json'
    import SubMenu from "@/components/layout/SubMenu";

    export default {
        components: {SubMenu},
        data() {
            return {
                menus: menus
            }
        }
    }
</script>