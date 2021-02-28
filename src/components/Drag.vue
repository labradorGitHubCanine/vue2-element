<template>
    <div>
        <svg ref="svg" :style="{height: svgHeight, width: svgWidth, border: '1px solid'}">
            <rect v-for="(i, j) in data" :key="j"
                  :class="{active: i.active}"
                  :x="x(i)"
                  :y="y(i)"
                  :height="rectHeight(i)"
                  :width="rectWidth(i)"
                  style="fill: #02b875"
                  @mousedown="mousedown($event, i)"
                  @mousemove="mousemove($event, i)"
                  @mouseup="$set(i, 'active', false)"
                  @mouseleave="$set(i, 'active', false)"
            ></rect>
        </svg>
        {{data[0].active}}
    </div>

</template>
<script>
    export default {
        model: {prop: 'data', event: 'a'},
        props: {
            data: {type: Array}, // 数组，包含了每个元素的坐标，类型等信息
            height: {type: Number, default: 100}, // svg的高度
            width: {type: Number, default: 100}, // svg的宽度
            zoom: {type: Number, default: 1} // 缩放，长宽会按比例放大缩小，默认1
        },
        data() {
            return {
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

    rect.active {
        stroke-width: 1;
    }
</style>
