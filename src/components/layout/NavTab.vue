<template>
    <el-tabs>
        <el-tab-pane v-for="i in tabs" :key="i.name" :name="i.name">
            <template v-slot:label>
                <div @contextmenu.prevent="contextmenu">
                    {{i.meta.title}}
                </div>
            </template>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
    export default {
        data() {
            return {
                tabs: []
            }
        },
        methods: {
            contextmenu(e) {
                console.log(e.x, e.y);
            }
        },
        watch: {
            $route(to) {
                if (!this.tabs.find(e => e.name === to.name))
                    this.tabs.push(to);
            }
        }
    }
</script>
<style scoped>
    >>> .el-tabs__header { /*取消tab下边距*/
        margin-bottom: 0 !important;
    }
</style>
