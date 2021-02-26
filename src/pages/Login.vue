<template>
    <div>

        <el-card>
            <el-button type="primary" style="width: 100%" @click="login">登录</el-button>
            <el-button type="info" style="width: 100%" @click="login">登录</el-button>
            <el-button type="success" style="width: 100%" @click="login">登录</el-button>
            <el-button type="warning" style="width: 100%" @click="login">登录</el-button>
            <el-button type="danger" style="width: 100%" @click="login">登录</el-button>
            <el-button style="width: 100%" @click="login">登录</el-button>
        </el-card>
    </div>
</template>
<script>
    import StorageUtil from "@/plugins/util/storage-util";

    export default {
        created() {
            StorageUtil.clear();
        },
        methods: {
            login() {
                this.$router.push({name: 'main'});
            }
        }
    }
</script>
