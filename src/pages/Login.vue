<template>
    <div>
        <el-button @click="login">登录</el-button>
    </div>
</template>
<script>
    export default {
        methods: {
            login() {
                this.$router.push({name: 'main'});
            }
        }
    }
</script>