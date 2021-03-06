<template>
    <div style="display: flex; justify-content: center; flex-direction: column; align-items: center">
        <lottie style="width: 36rem" :animation-data="path"/>
        <p>您所访问的页面不存在</p>
        <p>
            <el-button type="primary" @click="$router.back()">返回上一页</el-button>
        </p>
    </div>
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
