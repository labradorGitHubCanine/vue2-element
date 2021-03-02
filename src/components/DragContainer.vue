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
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <template v-slot:dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="i in types" :key="i.value" :command="i.value">{{i.name}}</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
        <el-col :span="20">
            <svg :style="{width: width, height: height}">
                <slot :height="height" :width="width" :rects="rects"/>
                <slot name="header" :a="1"></slot>
            </svg>
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
                heightValue: 1920
            }
        },
        methods: {
            add(e) {
                console.log(e);
            }
        },
        computed: {
            zoom() {
                return this.zoomValue / 100;
            },
            width() {
                return this.widthValue * this.zoom;
            },
            height() {
                return this.heightValue * this.zoom;
            }
        },
        mounted() {
            console.log(this.$scopedSlots);
            console.log(this.$slots);
        }
    }
</script>
<style scoped>
    svg {
        border: 1px solid #ababab;
        box-shadow: 0 0 8px #ababab;
    }
</style>
