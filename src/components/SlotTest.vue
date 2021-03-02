<template>
    <div>
        <div v-for="(i,j) in list" :key="j">
            <div style="display: inline" v-for="k in col" :key="k">{{i[k]}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            list: {type: Array},
        },
        data() {
            return {
                col: []
            }
        },
        mounted() {
            this.$slots.default.forEach(e => {
                this.col.push(e.data.attrs.prop);
            })
        }
    }
</script>
