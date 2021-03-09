<template>
    <div>
        标签属性方式：
        <el-button type="primary" @click="start1">开始</el-button>
        <el-row>
            <el-col span="4" push="4" data-step="1" data-intro="这是第一步" data-title="标题">第一步</el-col>
        </el-row>
        <el-row>
            <el-col span="4" push="12" data-step="2" data-intro="这是第二步" data-title="标题">第二步</el-col>
        </el-row>
        <el-row>
            <el-col span="4" push="20" data-step="3" data-intro="这是第三步" data-title="标题">第三步</el-col>
        </el-row>
        js方式：
        <el-button type="primary">开始</el-button>
        <el-row>
            <el-col span="4" push="4">第一步</el-col>
        </el-row>
        <el-row>
            <el-col span="4" push="12">第二步</el-col>
        </el-row>
        <el-row>
            <el-col span="4" push="20">第三步</el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        methods: {
            start1() {
                window.introJs().start();
            }
        }
    }
</script>