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
            <svg :style="{width: svgWidth, height: svgHeight}">

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
                <circle v-for="(i, j) in circles" :key="j" v-bind="i" r="5" stroke="black" stroke-width="1" fill="white"/>

            </svg>
            <slot :rect="rects.find(e=>e.selected)"></slot>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        props: {
            types: {type: Array, required: true},
            rects: {type: Array, required: true}
        },
        data() {
            return {
                zoomValue: 30, // 缩放30%
                widthValue: 1080,
                heightValue: 1920,
                mouseStart: {}, // 记录鼠标起点位置
                rectStart: {}
            }
        },
        methods: {
            rectPosition({top = 0, right = 0.2, bottom = 0.8, left = 0}) {
                return {
                    x: this.svgWidth * left,
                    y: this.svgHeight * top,
                    width: this.svgWidth * (1 - left - right),
                    height: this.svgHeight * (1 - +top - bottom),
                }
            },
            clearMouse() {

            },
            mousedown(e, i) {
                this.rects.forEach(e => this.$set(e, 'selected', false));
                this.$set(i, 'movable', true);
                this.$set(i, 'selected', true);
                this.mouseStart = {x: e.x, y: e.y};
                this.rectStart = {...i};
            },
            mouseup(e, i) {
                i.movable = false;
            },
            mouseleave(e, i) {
                i.movable = false;
            },
            mousemove(e, i) {
                if (i.movable) {
                    let distance = {x: e.x - this.mouseStart.x, y: e.y - this.mouseStart.y};
                    i.left = this.rectStart.left + distance.x / this.svgWidth;
                    i.right = this.rectStart.right - distance.x / this.svgWidth;
                    i.top = this.rectStart.top + distance.y / this.svgHeight;
                    i.bottom = this.rectStart.bottom - distance.y / this.svgHeight;
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
                    arr.push({cx: x + width / 2, cy: y});
                    arr.push({cx: x + width / 2, cy: y + height});
                    arr.push({cx: x + width, cy: y + height / 2});
                    arr.push({cx: x, cy: y + height / 2});
                    // 顶点四个点
                    arr.push({cx: x, cy: y});
                    arr.push({cx: x + width, cy: y});
                    arr.push({cx: x + width, cy: y + height});
                    arr.push({cx: x, cy: y + height});
                }
                return arr;
            }
        },
    }
</script>
<style scoped>
    svg {
        border: 1px solid #ababab;
        box-shadow: 0 0 8px #ababab;
    }

    rect {
        cursor: move;
        fill: white;
        stroke: black;
        stroke-width: 1;
        animation: run 10s linear infinite;
    }

</style>
