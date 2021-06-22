<template>
    <chart :options="options"></chart><!-- 折线图 -->
</template>
<script>
    import {Chart} from 'highcharts-vue'

    export default {
        props: {
            title: {type: String}, // 标题
            subtitle: {type: String}, // 副标题
            categories: {type: Array}, // x轴
            series: {type: Array}, // 数据，每项包含name:名称，data:[]数据
            unit: {type: String}, // 计量单位
            titleX: {type: String}, // x轴标题
            titleY: {type: String}, // y轴标题
        },
        computed: {
            options() {
                return {
                    title: {text: this.title, style: {fontWeight: 'bold'}},
                    subtitle: {text: this.subtitle},
                    tooltip: {
                        borderWidth: 0,
                        valueSuffix: this.unit,
                        split: true,
                        crosshairs: true,
                        animation: false // 关闭tooltip跟随动画
                    },
                    legend: {
                        enabled: this.series.length > 2,
                        borderWidth: 1,
                    },
                    xAxis: {
                        title: {text: this.titleX, align: 'low'},
                        gridLineWidth: 1,
                        categories: this.categories
                    },
                    yAxis: {title: {text: this.titleY, align: 'low'}},
                    series: this.series,
                    exporting: {enabled: false},
                    credits: {enabled: false},
                    plotOptions: {series: {animation: false}},
                }
            }
        },
        components: {Chart},
    }
</script>
