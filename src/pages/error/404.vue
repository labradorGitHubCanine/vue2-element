<template>
    <el-row type="flex" justify="center" align="middle">
        <el-col :md="12" :sm="24">
            <lottie :animation-data="path"/>
            <h2 style="text-align: center">您所访问的页面不存在</h2>
            <p style="text-align: center">
                <el-button type="primary" size="large" @click="$router.back()">返回上一页</el-button>
            </p>
        </el-col>
    </el-row>
</template>
<script>
    import Lottie from "@/components/Lottie"

    export default {
        components: {Lottie},
        data() {
            return {
                path: require("@/assets/json/404.json"),
            }
        }
    }
</script>
