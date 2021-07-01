<template>
    <!-- 饼状图 -->
    <chart :options="options"></chart>
</template>
<script>
    import {Chart} from 'highcharts-vue'

    export default {
        components: {Chart},
        props: {
            title: {type: String}, // 标题
            subtitle: {type: String}, // 副标题
            series: {type: Array, default: () => []}, // 数据，格式为：[{name: 名称, y: 值}, ...]
            unit: {type: String}, // 计量单位
        },
        computed: {
            options() {
                return {
                    chart: {type: 'pie'},
                    title: {text: this.title, style: {fontWeight: 'bold'}},
                    subtitle: {text: this.subtitle},
                    series: [{name: '', data: this.series}],
                    tooltip: {
                        borderWidth: 0,
                        valueSuffix: this.unit,
                        followPointer: false,
                        animation: false,
                        useHTML: true,
                        headerFormat: '<span style="color:{point.color}">\u25CF</span><b> {point.key}</b><table>',
                        pointFormat: [
                            '<tr><td><b>{point.y}</b></td></tr>',
                            '<tr><td><b>{point.percentage:.1f}%</b></td></tr>',
                        ].join(''),
                        footerFormat: '</table>',
                    },
                    credits: {enabled: false},
                    plotOptions: {
                        series: {animation: false},
                        pie: {
                            showInLegend: this.series.length > 2,
                            dataLabels: {
                                format: '<b>{point.name}</b> {point.percentage:.1f}%',
                            },
                        }
                    }
                }
            }
        }
    }
</script>
