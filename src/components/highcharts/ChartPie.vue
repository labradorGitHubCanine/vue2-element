<template>
    <!-- 饼状图 -->
    <chart :options="options"></chart>
</template>
<script>
    import {Chart} from 'highcharts-vue'

    export default {
        props: {
            title: {type: String}, // 标题
            subtitle: {type: String}, // 副标题
            data: {type: Array}, // 数据，格式为：[ [null, 分类...], [名称, 1, 2, 3, ...] ]，只需要2个元素
            unit: {type: String}, // 计量单位
        },
        components: {Chart},
        data() {
            return {
                options: {
                    chart: {type: 'pie'},
                    title: {text: this.title, style: {fontWeight: 'bold'}},
                    subtitle: {text: this.subtitle},
                    tooltip: {
                        borderWidth: 0,
                        valueSuffix: this.unit,
                        followPointer: false,
                        animation: false,
                        useHTML: true,
                        headerFormat: '<b>{point.key}</b><table>',
                        pointFormat: [
                            '<tr><td>{series.name}</td><td style="text-align: right"><b>{point.y}</b></td></tr>',
                            '<tr><td>占比</td><td style="text-align: right"><b>{point.percentage:.1f}%</b></td></tr>',
                        ].join(''),
                        footerFormat: '</table>',
                    },
                    data: {columns: this.data},
                    exporting: {enabled: true},
                    credits: {enabled: false},
                    plotOptions: {
                        series: {animation: false},
                        pie: {
                            dataLabels: {
                                format: '<b>{point.name}</b> {point.percentage:.1f}%',
                            },
                            // showInLegend: true
                        }
                    },
                    // legend: {
                    //     borderWidth: 1,
                    // },
                }
            }
        },
    }
</script>
