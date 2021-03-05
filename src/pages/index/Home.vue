<template>
    <div>
        <h1>{{ $route.meta.title }}</h1>
        <p>本后台模板基于vue2.0、element-ui开发，不定期更新组件、功能。</p>
        <p>由于本人比较喜欢原生态，所以保持了比较原始淳朴的样式，没有过多的写css。可根据需要自行添加样式。</p>
        <p>
            <el-link type="primary" @click="github">github地址</el-link>
        </p>


        <p>与整体页面布局相关的组件位于src\components\layout目录下</p>
        <p>
            <el-link type="primary" @click="startIntro">布局简介</el-link>
        </p>
    </div>
</template>
<script>
    export default {
        mounted() {
            this.intro = window.introJs().setOptions({
                steps: [
                    {
                        element: document.getElementById('header-bar'),
                        title: '头部导航栏',
                        intro: '组件位于src\\components\\layout\\HeaderBar.vue'
                    },
                    {
                        element: document.getElementById('aside-menu'),
                        title: '侧边菜单',
                        intro: '组件位于src\\components\\layout\\AsideMenu.vue'
                    },
                    {
                        title: '整体页面',
                        intro: '组件位于src\\pages\\Main.vue，包含了头部导航栏、侧边菜单，视图界面'
                    },
                    {
                        element: document.getElementById('main-container'),
                        title: '视图界面',
                        intro: '组件包含于src\\pages\\Main.vue内，是数据展示的窗口'
                    },
                ]
            });
        },
        data() {
            return {
                intro: null
            }
        },
        methods: {
            github() {
                window.open('https://github.com/labradorGitHubCanine/vue2-element.git')
            },
            startIntro() {
                this.intro.start();
            }
        }
    }
</script>
