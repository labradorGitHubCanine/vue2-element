<template>
    <div>
        <div class="container">
            <vue-drag-resize
                    :is-active="true"
                    :w="200" :h="200"
                    parent-limitation
                    v-on="{resizing: resize, dragging: resize}"
            >
                <button type="button" style="border: none; width: 100%; height: 100%">123</button>
            </vue-drag-resize>
            <vue-drag-resize :is-active="true"
                             :w="200" :h="200"
                             parent-limitation
                             v-on="{resizing: resize($event), dragging: resize}"
            >
                <iframe src="http://www.baidu.com" :scrolling="'no'" style="border: none; width: 100%; height: 100%"></iframe>
            </vue-drag-resize>
            <vue-drag-resize :is-active="true"
                             :w="200" :h="200"
                             parent-limitation
                             v-on="{resizing: resize($event), dragging: resize}"
            >
                <div style="width: 100%; height: 100%; text-align: center">{{new Date().toLocaleString()}}</div>
            </vue-drag-resize>
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
        methods: {
            resize(rect) {
                console.log(rect);
            }
        },
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
