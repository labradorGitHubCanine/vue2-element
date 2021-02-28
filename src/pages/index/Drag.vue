<template>
    <el-row>
        <el-col :span="12">
            <drag v-model="rects" width="1080" height="1920" :zoom="zoom"/>
        </el-col>
        <el-col :span="12">
            <el-form>
                <el-form-item label="缩放%">
                    <el-input-number v-model="zoom" :controls="false"></el-input-number>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<script>
    import Drag from "@/components/Drag";

    export default {
        components: {Drag},
        data() {
            return {
                zoom: 0.3,
                rects: [
                    {top: 0.2, bottom: 0.2, left: 0.1, right: 0.1}
                ],
                active: false,
                x: 10,
                y: 10
            }
        },
        methods: {
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
