<template>
    <el-tabs :value="$route.name" type="card">
        <el-tab-pane v-for="i in tabs" :key="i.name" :name="i.name">
            <template #label>
                <div @contextmenu.prevent="contextmenu">
                    {{i.title}}
                </div>
            </template>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
    import StorageUtil from "@/plugins/util/storage-util";
    import JsonUtil from "@/plugins/util/json-util";

    export default {
        data() {
            return {
                tabs: JsonUtil.parseArray(StorageUtil.getItem('__tabs')),
                x: 0,
                y: 0
            }
        },
        methods: {
            contextmenu(e) {
                this.x = e.x + 'px';
                this.y = e.y + 'px';
                console.log(e.x + 'px', e.y + 'px');
            }
        },
        watch: {
            $route(to) {
                if (this.tabs.every(e => e.name !== to.name))
                    this.tabs.push({title: to.meta.title, name: to.name});
            },
            tabs(val) {
                StorageUtil.setItem('__tabs', JSON.stringify(val));
            }
        }
    }
</script>
<style scoped>

</style>
