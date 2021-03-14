<template>
    <el-main>
        <el-card>
            <el-row>
                <el-col style="padding: 8px" v-for="i in 10" :key="i" :span="6">
                    <el-card shadow="hover"></el-card>
                </el-col>
            </el-row>
        </el-card>
    </el-main>
</template>
<script>
    export default {}
</script>
