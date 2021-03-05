<template>
    <div style="display: flex; align-items: center; justify-content: center">
        <el-card style="width: 45rem">
            <el-row>
                <el-col :span="12" class="hidden-sm-and-down">
                    <lottie ref="lottie_web"
                            :animation-data="defaultOptions.path"
                            :loop="defaultOptions.loop"
                            :animation-speed="defaultOptions.animationSpeed"
                            @isLottieFinish="handleLottieFinish"
                    />
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
    import StorageUtil from "@/plugins/util/storage-util";
    import a from "@/assets/json/16952-group-working.json"

    const Lottie = () => import('@/components/Lottie');

    export default {
        components: {Lottie},
        created() {
            StorageUtil.clear();
        },
        data() {
            return {
                form: {},
                defaultOptions: {
                    path: a,
                    loop: true,
                    animationSpeed: 1
                }
            }
        },
        methods: {
            login() {
                this.$router.push({name: 'main'});
            },
            play() {
                this.$refs.lottie_web.play()
            },
            stop() {
                this.$refs.lottie_web.stop()
            },
            pause() {
                this.$refs.lottie_web.pause()
            },
            handleLottieFinish() {
                // 事件处理
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
