<template>
    <rect :style="{width: 10, height: 10}"></rect>
</template>
<script>
    export default {
        mounted() {
            // console.log(this.$slots)
        },
        props: {
            data: {
                type: Object,
                default: () => ({})
            }
        },
        model: {
            prop: 'data',
            event: 'a'
        }
    }
</script>
<style scoped>
    rect {
        stroke: #02b875;
        stroke-width: 0.5;
    }
</style>