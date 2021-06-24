<template>
    <!-- 柱形图 -->
    <chart :options="options"></chart>
</template>
<script>
    import {Chart} from 'highcharts-vue'

    export default {
        components: {Chart},
        props: {
            title: {type: String}, // 标题
            subtitle: {type: String}, // 副标题
            categories: {type: Array}, // x坐标轴
            series: {type: Array, default: () => []}, // 数据，格式为：[{name: 名称, data: [...]},...]
            unit: {type: String}, // 计量单位
            titleX: {type: String}, // x轴标题
            titleY: {type: String}, // y轴标题
            stacking: {type: String, default: ''} // 柱状图类型：不填-分组柱状图，normal-堆叠柱状图，percent-百分比柱状图
        },
        computed: {
            options() {
                return {
                    chart: {type: 'column'},
                    title: {text: this.title, style: {fontWeight: 'bold'}},
                    subtitle: {text: this.subtitle},
                    xAxis: {
                        title: {text: this.titleX, align: 'low'},
                        categories: this.categories,
                        gridLineWidth: 1,
                    },
                    yAxis: {title: {text: this.titleY, align: 'low'}},
                    tooltip: {
                        borderWidth: 0,
                        valueSuffix: this.unit,
                        animation: false,
                        crosshairs: true,
                        headerFormat: '<b>{point.key}</b><br/>',
                        useHTML: true
                    },
                    legend: {
                        enabled: this.series.length > 2,
                        borderWidth: 1,
                    },
                    series: this.series,
                    credits: {enabled: false},
                    plotOptions: {
                        column: {stacking: this.stacking},
                        series: {animation: false}
                    },
                }
            }
        }
    }
</script>
