<template>
    <el-main>
        <el-card>
            <el-row>
                <el-col style="padding: 8px" v-for="i in 10" :key="i" :span="6">
                    <el-card shadow="hover" :body-style="{padding: 0}">
                        <lottie :animation-data="path"/>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
    </el-main>
</template>
<script>
    import Lottie from "@/components/Lottie"

    export default {
        components: {Lottie},
        data() {
            return {
                path: require("@/assets/json/blog.json"),
            }
        }
    }
</script>
