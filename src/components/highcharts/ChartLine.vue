<template>
    <!-- 折线图 -->
    <chart :options="options"></chart>
</template>
<script>
    import {Chart} from 'highcharts-vue'

    export default {
        props: {
            title: {type: String}, // 标题
            subtitle: {type: String}, // 副标题
            data: {type: Array}, // 数据，格式为：[ [null, x轴刻度], [数据1, 1, 2, 3, ...], 数据2, ... ]
            unit: {type: String}, // 计量单位
            titleX: {type: String}, // x轴标题
            titleY: {type: String}, // y轴标题
        },
        components: {Chart},
        data() {
            return {
                options: {
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
                        enabled: this.data.length > 2,
                        borderWidth: 1,
                    },
                    xAxis: {
                        title: {text: this.titleX, align: 'low'},
                        gridLineWidth: 1,
                    },
                    yAxis: {title: {text: this.titleY, align: 'low'}},
                    data: {columns: this.data},
                    exporting: {enabled: true},
                    credits: {enabled: false},
                    plotOptions: {series: {animation: false}},
                }
            }
        }
    }
</script>
