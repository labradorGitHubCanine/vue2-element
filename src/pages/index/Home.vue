<template>
    <div>
        <el-table border :data="[
            {file: 'Login.vue', intro: '登录界面', location: 'src/pages'},
            {file: 'Main.vue', intro: '布局主界面', location: 'src/pages'},
            {file: 'HeaderBar.vue', intro: '头部导航栏', location: 'src/components/layout'},
            {file: 'AsideMenu.vue', intro: '左侧菜单栏', location: 'src/components/layout'},
            {file: 'FooterBar.vue', intro: '底部文字', location: 'src/components/layout'},
        ]">
            <el-table-column prop="file" label="组件名"></el-table-column>
            <el-table-column prop="intro" label="简介"></el-table-column>
            <el-table-column prop="location" label="位置"></el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {}
</script>
