<template>
    <div>
        <p>
            <el-link type="primary" @click="github">github</el-link>
        </p>
        <p>这是一个精简版的后台管理模板，其结构大致如下：</p>
        <el-image style="width: 400px" :src="structure"></el-image>
        <p>
            App.vue入口处的router-view会跳转两个主要界面：Login.vue和Main.vue。
            Main.vue包含三个布局组件外加一个router-view用于展示。
        </p>

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
    export default {
        data() {
            return {
                structure: require("@/assets/image/structure.jpg")
            }
        },
        methods: {
            github() {
                window.open('https://github.com/labradorGitHubCanine/vue2-element.git')
            }
        }
    }
</script>
