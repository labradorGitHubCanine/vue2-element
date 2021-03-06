<template>
    <div style="display: flex; align-items: center; justify-content: center">
        <el-card style="width: 50rem">
            <el-row>
                <el-col :span="12" class="hidden-sm-and-down">
                    <lottie :animation-data="path"/>
                </el-col>
                <el-col :md="12" :sm="24">
                    <h2 style="text-align: center">Vue2-Element</h2>
                    <el-form size="large">
                        <el-form-item>
                            <el-input v-model="form.username" prefix-icon="el-icon-user" placeholder="用户名" clearable></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="form.password" prefix-icon="el-icon-key" placeholder="密码" clearable type="password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-checkbox>记住密码</el-checkbox>
                            <el-button type="primary" style="width: 100%; margin: 0" @click="login">登录</el-button>
                            <el-button type="text" style="width: 100%; margin: 0">注册</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>
<script>
    import StorageUtil from "@/plugins/util/storage-util"
    import Lottie from "@/components/Lottie"

    export default {
        components: {Lottie},
        created() {
            StorageUtil.clear();
        },
        data() {
            return {
                form: {},
                path: require("@/assets/json/working.json"),
            }
        },
        methods: {
            login() {
                this.$router.push({name: 'main'});
            }
        }
    }
</script>
<style scoped>
    @media screen and (max-width: 991px) {
        .el-card {
            border: none;
            box-shadow: none;
        }
    }
</style>
