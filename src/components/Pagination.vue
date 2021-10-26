<template>
    <el-pagination v-if="+total > 0"
                   :style="{textAlign: isMobile ? 'center' : ''}"
                   :total="+total"
                   :small="small"
                   background
                   :layout="small || isMobile ? 'prev, pager, next' : 'total, sizes, ->, jumper, prev, pager, next'"
                   :current-page="data.pageNum || 1"
                   :pager-count="small || isMobile ? 5 : 7"
                   :page-size="data.pageSize || 10"
                   @current-change="currentChange"
                   @size-change="sizeChange"
    ></el-pagination>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {className: 'hidden-sm-and-down', pagerCount: 7, layout: 'total, sizes, ->, jumper, prev, pager, next'},
                {className: 'hidden-md-and-up', pagerCount: 5, layout: 'prev, pager, next'},
            ]
        }
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile
        }
    },
    props: {
        data: {
            type: Object,
            required: true
        },
        total: {
            type: Number,
            default: 0
        },
        small: { // 小型尺寸
            type: Boolean,
            default: false
        }
    },
    model: {
        prop: 'data',
        event: 'change'
    },
    methods: {
        currentChange(e) {
            this.$emit('change', {...this.data, pageNum: e});
        },
        sizeChange(e) {
            this.$emit('change', {...this.data, pageSize: e});
        }
    }
}
</script>
