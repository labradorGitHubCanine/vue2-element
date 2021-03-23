<template>
    <el-row>
        <el-col :span="20" :offset="4" style="height: 50px;">
            <el-input-number v-model="widthValue" :controls="false" placeholder="宽度"></el-input-number>
            *
            <el-input-number v-model="heightValue" :controls="false" placeholder="高度"></el-input-number>
        </el-col>
        <el-col :span="4" style="display: flex; flex-direction: column; align-items: center;">
            <el-slider v-model="zoomValue"
                       :format-tooltip="e => e + '%'"
                       vertical
                       height="200px">
            </el-slider>
            <el-dropdown show-timeout="0" @command="e => $emit('add', e)">
                <el-button type="text">
                    添加<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="i in types" :key="i.value" :command="i.value">{{i.name}}</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-button type="text" v-if="selectedRect">删除<i class="el-icon-close el-icon--right"></i></el-button>
        </el-col>
        <el-col :span="20">
            <svg :style="{width: svgWidth, height: svgHeight}" @mousemove="resize($event)" @mouseup="resizing=[]">

                <!-- 画矩形 -->
                <rect v-for="(i, j) in rects" :key="j"
                      :style="{strokeDasharray: i.selected ? 3 : 0}"
                      v-bind="rectPosition(i)"
                      @mousedown="mousedown($event, i)"
                      @mouseup="mouseup($event, i)"
                      @mouseleave="mouseleave($event, i)"
                      @mousemove="mousemove($event, i)"
                ></rect>

                <!-- 画尺寸调整球 -->
                <circle v-for="(i, j) in circles" :key="j"
                        :class="i.resize" v-bind="i"
                        r="5" stroke="black" stroke-width="1" fill="white"
                        @mousedown="resizeStart($event, i.resize)"

                />

            </svg>
            <slot :rect="rects.find(e=>e.selected)"></slot>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        props: {
            types: {type: Array, required: true}, // 可添加的类型，文本、图片、视频等
            rects: {type: Array, required: true}  // 矩形数组
        },
        data() {
            return {
                zoomValue: 30, // 缩放30%
                widthValue: 1080, // 宽度px
                heightValue: 1920, // 高度px
                mouseStart: {}, // 记录鼠标起始点位置
                rectStart: {}, // 记录矩形起始点位置
                resizing: [] // 鼠标点击圆圈时记录resize类型，可选值有top right bottom left
            }
        },
        methods: {
            // 计算rect的坐标，因为传入的市局是百分比，需要转换为 坐标+尺寸 的格式
            rectPosition({top = 0, right = 0.2, bottom = 0.8, left = 0}) {
                return {
                    x: this.svgWidth * left,
                    y: this.svgHeight * top,
                    width: this.svgWidth * (1 - left - right),
                    height: this.svgHeight * (1 - +top - bottom),
                }
            },
            mousedown(e, i) { // 在矩形上按下鼠标
                this.rects.forEach(e => this.$set(e, 'selected', false)); // 重置所有selected属性，保证只有一个selected为true
                this.$set(i, 'movable', true); // 按下鼠标则 允许当前矩形跟随鼠标
                this.$set(i, 'selected', true); // 设置当前矩形为 选中状态
                this.mouseStart = {x: e.x, y: e.y}; // 记录鼠标起始位置
                this.rectStart = {...i}; // 记录矩形起始位置
            },
            mouseup(e, i) {
                i.movable = false; // 松开鼠标 禁止矩形跟随鼠标
            },
            mouseleave(e, i) {
                i.movable = false; // 离开矩形范围 禁止矩形跟随鼠标
            },
            mousemove(e, i) {
                if (i.movable) { // 鼠标移动时判断当前矩形是否允许跟随鼠标
                    let distance = {x: e.x - this.mouseStart.x, y: e.y - this.mouseStart.y}; // 计算鼠标相对于mousedown事件中记录的起始位置的距离
                    i.left = this.rectStart.left + distance.x / this.svgWidth;
                    i.right = this.rectStart.right - distance.x / this.svgWidth;
                    i.top = this.rectStart.top + distance.y / this.svgHeight;
                    i.bottom = this.rectStart.bottom - distance.y / this.svgHeight;
                }
            },
            resizeStart(e, resize = []) {
                this.resizing = resize;
                this.mouseStart = {x: e.x, y: e.y}; // 记录鼠标起始位置
                this.rectStart = {...this.selectedRect}; // 记录矩形起始位置
            },
            resize(e) {
                let rect = this.rects.find(e => e.selected);
                if (rect && this.resizing.length > 0) {
                    let distance = {x: e.x - this.mouseStart.x, y: e.y - this.mouseStart.y}; // 计算鼠标相对于mousedown事件中记录的起始位置的距离
                    if (this.resizing.includes('left'))
                        rect.left = this.rectStart.left + distance.x / this.svgWidth;
                    if (this.resizing.includes('right'))
                        rect.right = this.rectStart.right - distance.x / this.svgWidth;
                    if (this.resizing.includes('top'))
                        rect.top = this.rectStart.top + distance.y / this.svgHeight;
                    if (this.resizing.includes('bottom'))
                        rect.bottom = this.rectStart.bottom - distance.y / this.svgHeight;
                }
            }
        },
        computed: {
            zoom() {
                return this.zoomValue / 100;
            },
            svgWidth() {
                return this.widthValue * this.zoom;
            },
            svgHeight() {
                return this.heightValue * this.zoom;
            },
            selectedRect() {
                return this.rects.find(e => e.selected);
            },
            circles() { // 返回用于调整rect尺寸大小的圆圈数组
                let arr = [];
                if (this.selectedRect) {
                    let {x, y, width, height} = this.rectPosition(this.selectedRect);
                    // 边上四个点
                    arr.push({cx: x + width / 2, cy: y, resize: ['top']}); // 上
                    arr.push({cx: x + width / 2, cy: y + height, resize: ['bottom']}); // 下
                    arr.push({cx: x + width, cy: y + height / 2, resize: ['right']}); // 右
                    arr.push({cx: x, cy: y + height / 2, resize: ['left']}); // 左
                    // 顶点四个点
                    arr.push({cx: x, cy: y, resize: ['top', 'left']}); // 左上
                    arr.push({cx: x + width, cy: y, resize: ['top', 'right']}); // 右上
                    arr.push({cx: x + width, cy: y + height, resize: ['bottom', 'right']}); // 右下
                    arr.push({cx: x, cy: y + height, resize: ['bottom', 'left']}); // 左下
                }
                return arr;
            }
        },
    }
</script>
<style scoped lang="scss">
    svg {
        border: 1px solid #ababab;
        box-shadow: 0 0 8px #ababab;
    }

    rect {
        cursor: move;
        fill: white;
        stroke: black;
        stroke-width: 1;
    }

    circle {
        &.top, &.bottom {
            cursor: ns-resize;
        }

        &.left, &.right {
            cursor: ew-resize;
        }

        &.top.left, &.bottom.right {
            cursor: nwse-resize;
        }

        &.top.right, &.bottom.left {
            cursor: nesw-resize;
        }
    }

</style>
