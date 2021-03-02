<template>
    <el-row>
        <el-col :span="12">
            <drag-container :types="types" @add="add" :rects="rects">
                <drag-item :svgWidth="width" :svgHeight="height"></drag-item>
            </drag-container>
        </el-col>
        <el-col :span="12">
            <div v-for="(i, j) in rects" :key="j">
                {{i}}
            </div>
        </el-col>
    </el-row>
</template>
<script>
    import DragContainer from "@/components/DragContainer";
    import DragItem from "@/components/DragItem";

    export default {
        components: {DragContainer, DragItem},
        data() {
            return {
                types: [
                    {name: '文本', value: 1},
                    {name: '图片', value: 2},
                    {name: '按钮', value: 3},
                    {name: '视频', value: 4},
                    {name: '链接', value: 5},
                ],
                rects: [
                    {top: 0.2, bottom: 0.2, left: 0.1, right: 0.1, active: false},
                    {top: 0.1, bottom: 0.7, left: 0.1, right: 0.7, active: false},
                ],
                active: false,
                x: 10,
                y: 10
            }
        },
        methods: {
            add(e) {
                console.log(e);
            },
            mousedown(e) {
                console.log(e);
                this.active = true;
            },
            mouseup(e) {
                console.log(e);
                this.active = false;
            },
            mousemove(e) {
                if (this.active) {
                    this.x += e.movementX;
                    this.y += e.movementY;
                }
            }
        }
    }
</script>
