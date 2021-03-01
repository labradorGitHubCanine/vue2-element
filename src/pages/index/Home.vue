<template>
    <div>
        <h1>概述</h1>
        <p>本后台模板基于vue2.0、element-ui开发，不定期更新组件、功能。</p>
        <p>由于本人比较喜欢原生态，所以保持了比较原始淳朴的样式，没有过多的写css。可根据需要自行添加样式。</p>
        <p>其实这是为了找工作临时搭建的，只写了一些核心的功能，样式这个东西不管写成什么样子都有人说丑，所以就保持原生态吧。</p>
        <p>
            <el-link type="primary" @click="github" id="aa">github地址</el-link>
        </p>
    </div>
</template>
<script>
    export default {
        mounted() {
            window.introJs().setOptions({
                steps: [{
                    intro: "Hello world!"
                }, {
                    element: document.getElementById('aa'),
                    intro: "Click here to login!"
                }]
            }).start();
        },
        methods: {
            github() {
                window.open('https://github.com/labradorGitHubCanine/vue2-element.git')
            },
        }
    }
</script>
