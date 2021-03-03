<template>
    <el-row>
        <el-col :span="12">
            <drag-container :types="types" @add="add" :rects="rects">
                <template #default="{rect={}}">
                    <el-form label-width="50px">
                        <el-form-item label="上">
                            <el-input-number :controls="false" v-model="rect.top" min="-1" max="1"></el-input-number>
                        </el-form-item>
                        <el-form-item label="右">
                            <el-input-number :controls="false" v-model="rect.right" min="-1" max="1"></el-input-number>
                        </el-form-item>
                        <el-form-item label="下">
                            <el-input-number :controls="false" v-model="rect.bottom" min="-1" max="1"></el-input-number>
                        </el-form-item>
                        <el-form-item label="左">
                            <el-input-number :controls="false" v-model="rect.left" min="-1" max="1"></el-input-number>
                        </el-form-item>
                    </el-form>
                </template>
            </drag-container>
        </el-col>
        <el-col :span="12">
            <div style=""></div>
            <div v-for="(i, j) in rects" :key="j">
                {{i}}
            </div>
        </el-col>
    </el-row>
</template>
<script>
    import DragContainer from "@/components/DragContainer";

    export default {
        components: {DragContainer,},
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
            add(e) {
                console.log(e);
                this.rects.push({left: 0.1, right: 0.7, top: 0.1, bottom: 0.7});
            },
        }
    }
</script>
