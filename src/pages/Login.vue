<template>
    <div style="display: flex; align-items: center; justify-content: center">
        <el-card style="width: 50rem">
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
                    <h2 style="text-align: center">Element</h2>
                    <el-form size="large">
                        <el-form-item>
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input></el-input>
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
    import Lottie from "@/components/Lottie";
    import a from "@/assets/json/16952-group-working.json"

    export default {
        components: {Lottie},
        created() {
            StorageUtil.clear();
        },
        data() {
            return {
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
