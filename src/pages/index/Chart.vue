<template>
    <div>
        <el-row>
            <el-col>
                <chart-line title="今年销售业绩统计"
                            :categories="new Array(12).fill(null).map((e, index)=>index+1+'月')"
                            :series="[
                                {name: '衢州', data: randomArray(12)},
                                {name: '宁波', data: randomArray(12)},
                                {name: '丽水', data: randomArray(12)},
                            ]"
                            title-x="月份"
                            unit="万"
                            title-y="销售额"
                ></chart-line>
            </el-col>
            <el-col>
                <el-radio-group v-model="stacking">
                    <el-radio-button label="">分组</el-radio-button>
                    <el-radio-button label="normal">堆叠</el-radio-button>
                    <el-radio-button label="percent">百分比</el-radio-button>
                </el-radio-group>
                <chart-column title="各类水果销售状况"
                              :categories="['苹果', '橘子', '香蕉', '梨']"
                              :series="[
                                  {name: '衢州', data: randomArray(4)},
                                  {name: '宁波', data: randomArray(4)},
                                  {name: '丽水', data: randomArray(4)},
                              ]"
                              unit="吨"
                              title-y="销售量"
                              title-x="水果种类"
                              :stacking="stacking"
                ></chart-column>
            </el-col>
            <el-col>
                <chart-pie title="各水果销量占比"
                           :series="[
                               {name: '苹果', y: +(Math.random()*100).toFixed(0)},
                               {name: '香蕉', y: +(Math.random()*100).toFixed(0)},
                               {name: '葡萄', y: +(Math.random()*100).toFixed(0)}
                           ]"
                           unit="吨"
                           name="销量"
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
        components: {ChartPie, ChartColumn, ChartLine},
        data() {
            return {
                stacking: ''
            }
        },
        methods: {
            randomArray(size) {
                return new Array(size).fill(null).map(() => +(Math.random() * 100).toFixed(0));

            }
        }
    }
</script>
