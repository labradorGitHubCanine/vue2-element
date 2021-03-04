<template>
    <div>
        <p>
            随着组件的细化，会遇到多组件状态共享的情况。Vuex可以解决这类问题。
        </p>
        <p>
            不过就像Vuex官方文档所说，如果不是一个大型应用，为了避免代码繁琐冗余，最好不要使用它。
        </p>
        <p>
            在本项目中，使用了比较轻量级的Vue.observable()进行状态管理。
        </p>
        <p>
            <el-link type="primary" @click="docs">Vue.observable</el-link>
        </p>
    </div>
</template>
<script>
    export default {
        methods: {
            docs() {
                window.open('https://cn.vuejs.org/v2/api/#Vue-observable');
            }
        },
    }
</script>
