<template>
    <div style="display: flex; align-items: center; justify-content: center; flex-direction: column">
        <el-upload drag multiple action="" :show-file-list="false" :http-request="upload" @click="upload">
            <i class="el-icon-upload"></i>
            <div v-if="files.length === 0">选择多个文件</div>
            <div v-else>已选择{{files.length}}个文件</div>
        </el-upload>
        <el-button type="success" icon="el-icon-download" @click="submit">下载</el-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                files: []
            }
        },
        methods: {
            upload(e) {
                this.files.push(e.file);
            },
            submit() {
                this.$axios.post('upload')
            }
        }
    }
</script>