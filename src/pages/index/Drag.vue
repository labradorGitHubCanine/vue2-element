<template>
    <div>
        <div class="container">
            <vue-drag-resize :isActive="true" :w="200" :h="200" :parent-limitation="true"></vue-drag-resize>
        </div>
    </div>
</template>
<script>

    const VueDragResize = window.VueDragResize.default

    export default {
        data() {
            return {
                types: [
                    {name: '文本', value: 1},
                    {name: '图片', value: 2},
                    {name: '按钮', value: 3},
                    {name: '视频', value: 4},
                    {name: '链接', value: 5},
                ],
                rects: [],
            }
        },
        methods: {},
        components: {VueDragResize}
    }
</script>
<style scoped>
    .container {
        position: absolute;
        border: 1px solid;
        width: 500px;
        height: 500px;
    }
</style>
