<template>
    <div>
        <h1>概述</h1>
        <p>本后台模板基与vue2.0、element-ui开发，不定期更新功能。</p>
        <p>本后台保持了比较原始淳朴的样式，没有过多的写css，可根据需要自行添加样式</p>
        <p>
            <el-link type="primary" @click="github">github地址</el-link>
        </p>
    </div>
</template>
<script>
    export default {
        methods: {
            github() {
                window.open('https://github.com/labradorGitHubCanine/vue2-element.git')
            }
        }
    }
</script>
