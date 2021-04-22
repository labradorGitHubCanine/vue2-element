<template>
    <div>
        <el-row>
            <el-col>
                <chart-line title="今年销售业绩统计"
                            :data="[
                                new Array(13).fill(null).map((e, index)=>index+'月'),
                                new Array(13).fill(null).map((e, index)=>index===0?'金华':(Math.random()*10000).toFixed(0)),
                                new Array(13).fill(null).map((e, index)=>index===0?'丽水':(Math.random()*10000).toFixed(0)),
                                new Array(13).fill(null).map((e, index)=>index===0?'舟山':(Math.random()*10000).toFixed(0)),
                            ]"
                            title-x="月份"
                            unit="万"
                            title-y="销售额"
                ></chart-line>
            </el-col>
            <el-col>
                <chart-column title="各类水果销售状况"
                              :data="[
                                  [null, '苹果', '橘子', '香蕉'],
                                  ['衢州', ...new Array(3).fill(null).map(()=>(Math.random()*100).toFixed(0))],
                                  ['温州', ...new Array(3).fill(null).map(()=>(Math.random()*100).toFixed(0))],
                                  ['宁波', ...new Array(3).fill(null).map(()=>(Math.random()*100).toFixed(0))],
                              ]"
                              unit="吨"
                              title-y="销售量"
                              title-x="水果种类"
                ></chart-column>
            </el-col>
            <el-col>
                <chart-pie title="各地区销量占比"
                           :data="[
                               [null, '杭州', '温州', '嘉兴'],
                               ['销售额', ...new Array(4).fill(null).map(()=>(Math.random()*10000).toFixed(0))]
                           ]"
                           unit="万"
                ></chart-pie>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    const ChartLine = () => import( "@/components/highcharts/ChartLine");
    const ChartColumn = () => import("@/components/highcharts/ChartColumn");
    const ChartPie = () => import("@/components/highcharts/ChartPie");

    export default {
        components: {ChartPie, ChartColumn, ChartLine}
    }
</script>
