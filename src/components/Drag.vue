<template>
    <el-row>
        <el-col :span="2">
            <el-slider v-model="zoomValue"
                       :format-tooltip="e => e + '%'"
                       vertical
                       height="200px">
            </el-slider>
        </el-col>
        <el-col :span="22">
            <svg ref="svg" :style="{height: svgHeight, width: svgWidth, border: '1px solid'}">
                <rect v-for="(i, j) in data" :key="j"
                      :class="{active: i.active}"
                      :x="x(i)"
                      :y="y(i)"
                      :height="rectHeight(i)"
                      :width="rectWidth(i)"
                      @mousedown="mousedown($event, i)"
                      @mousemove="mousemove($event, i)"
                      @mouseup="$set(i, 'active', false)"
                      @mouseleave="$set(i, 'active', false)"
                ></rect>
            </svg>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        model: {prop: 'data', event: 'a'},
        props: {
            data: {type: Array}, // 数组，包含了每个元素的坐标，类型等信息
            height: {type: Number, default: 100}, // svg的高度
            width: {type: Number, default: 100}, // svg的宽度
        },
        data() {
            return {
                zoomValue: 30,
                mouseStart: {x: 0, y: 0}, // 用于记录开始拖拽时鼠标的起始位置
                rectStart: {}, // 用于记录开始拖拽时rect的起始位置
            }
        },
        methods: {
            x(e) { // 计算x坐标
                return e.left * this.svgWidth;
            },
            y(e) { // 计算y坐标
                return e.top * this.svgHeight;
            },
            rectHeight(e) { // 计算高度
                return (1 - e.top - e.bottom) * this.svgHeight;
            },
            rectWidth(e) { // 计算高度
                return (1 - e.left - e.right) * this.svgWidth;
            },
            move(i, distanceX, distanceY) { // 移动
                i.top = this.rectStart.top + distanceY;
                i.bottom = this.rectStart.bottom - distanceY;
                i.left = this.rectStart.left + distanceX;
                i.right = this.rectStart.right - distanceX;
            },
            mousedown(e, i) {
                this.mouseStart = {x: e.clientX, y: e.clientY};
                this.rectStart = {...i}; // 深拷贝
                i.active = true;
            },
            mousemove(e, i) {
                if (i.active) {
                    this.move(i,
                        (e.clientX - this.mouseStart.x) / this.svgWidth,
                        (e.clientY - this.mouseStart.y) / this.svgHeight
                    );
                }
            }
        },
        computed: {
            zoom() {
                return this.zoomValue / 100;
            },
            svgHeight() { // svg整体高度
                return this.height * this.zoom;
            },
            svgWidth() { // svg整体宽度
                return this.width * this.zoom;
            }
        }

    }
</script>
<style scoped>
    rect {
        cursor: move;
    }

    rect {
        fill: white;
        stroke: black;
        stroke-width: 0.5;
    }

</style>
