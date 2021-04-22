<template>
    <chart :options="options"></chart>
</template>
<script>
    export default {
        components: {Chart: () => import('highcharts-vue')},
        data() {
            return {
                options: {}
            }
        }
    }
</script>1