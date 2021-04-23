<template>
    <el-dialog :visible.sync="visible" append-to-body :close-on-click-modal="false" title="消息中心" :fullscreen="$store.state.isMobile">
        <el-table :data="new Array(10).fill(undefined).map(e=>({content:'张三给您点赞了'}))"
                  :show-header="false"
        >
            <el-table-column prop="content"></el-table-column>
        </el-table>
        <pagination :data="{}" :total="100"></pagination>
        <template #footer>
            <el-button @click="visible=false">关 闭</el-button>
        </template>
    </el-dialog>
</template>
<script>
    export default {
        data() {
            return {
                visible: false
            }
        },
        methods: {
            show() {
                this.visible = true;
            }
        },
        components: {'pagination': () => import('@/components/Pagination')}
    }
</script>