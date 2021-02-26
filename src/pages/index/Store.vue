<template>
    <pre>
        随着组件的细化，会遇到多组件状态共享的情况。Vuex可以解决这类问题，不过就像Vuex官方文档所说，如果不是一个大型应用，为了避免代码繁琐冗余，最好不要使用它。
        在本项目中，使用了比较轻量级的Vue.observable()进行状态管理。

        1、配置
        找到/src/plugins/store/index.js文件，其内容大致如下：
        <code>
            const Vue = window.Vue

            export const store = Vue.observable({
                count: 1 // 自定义参数
            })

            export const mutations = {
                add() { // 自定义的方法
                    store.count++;
                }
            }
        </code>

        2、使用
        <code>
            import {mutations, store} from "@/plugins/store";

            export default {
                methods: {
                    add: mutations.add // 方法调用
                },
                computed: {
                    count() {
                        return store.count; // 取值
                    }
                }
            }
        </code>

        3、测试使用
        <el-button @click="add">count++</el-button>
        count:{{count}}

    </pre>
</template>
<script>
    import {mutations, store} from "@/plugins/store";

    export default {
        methods: {
            add: mutations.add
        },
        computed: {
            count() {
                return store.count;
            }
        }
    }
</script>
