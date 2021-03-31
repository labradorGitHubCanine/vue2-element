<template>
    <div>

        <el-button type="primary" size="large" @click="exportPDF" style="position: fixed; left: 8px; top: 8px; z-index: 1">导出为PDF</el-button>

        <el-backtop></el-backtop>

        <div class="main" ref="pdf">
            <div class="main-title">个人简历</div>
            <div v-for="(i, j) in modules" :key="j">
                <el-divider content-position="left">
                    <h2 style="color: cornflowerblue"><i :class="`el-icon-${i.icon}`"></i>&nbsp;{{i.title}}</h2>
                </el-divider>
                <div class="content" v-html="i.content"></div>
            </div>
        </div>

    </div>
</template>
<script>

    export default {
        methods: {
            exportPDF() {
                document.scrollingElement.scrollTop = 0;
                this.$PDFSave(this.$refs.pdf, "个人简历 - 强名威");
            }
        },
        data: () => ({
            modules: [
                {
                    title: '基本信息',
                    icon: 'info',
                    content: [
                        '<table>',
                        '   <tr><td style="width: 50%">姓名：强名威</td><td>所在地：浙江省杭州市</td></tr>',
                        '   <tr><td>工作年限：5年</td><td>求职意向：JAVA/全栈开发</td></tr>',
                        '   <tr><td>手机号码：18767162021</td><td>邮箱：123349527@qq.com</td></tr>',
                        '</table>'
                    ].join('')
                },
                {
                    title: '个人评价',
                    icon: 'user-solid',
                    content: '我是一个“懒”人，在过去的工作经历中，我一直希望能够用尽可能少的工作量来完成更多的事情，因此我不断学习公司不曾使用的新技术、新框架来完善自己的技能，提高工作效率。简洁、高效、易维护、低冗余，是我对编程工作的追求。'
                },
                {
                    title: '个人技能',
                    icon: 's-tools',
                    content: [
                        '<ul>',
                        '   <li>熟练使用 html/css/js，jquery，bootstrap 等基础ui框架</li>',
                        '   <li>精通 vue/element-ui 搭建前端项目，了解 vant/vuetify/quasar/antd-vue 等ui框架</li>',
                        '   <li>熟练使用 java/springboot/mybatis-plus 等框架搭建服务器项目</li>',
                        '   <li>熟悉 mysql/redis 等数据库和缓存数据库，有良好的sql编写能力，掌握常用sql优化技巧</li>',
                        '   <li>熟悉 docker/nginx 等方式部署前端和后端项目</li>',
                        '   <li>熟悉 jsp/servlet 等web开发技术（太老了，最近基本不用了）</li>',
                        '   <li>使用 maven/git 等工具管理和构建项目</li>',
                        '</ul>'
                    ].join('')
                },
                {
                    title: '教育经历',
                    icon: 'school',
                    content: [
                        '<table>',
                        '   <tr>',
                        '       <td style="width: 50%">中国计量大学</td>',
                        '       <td style="width: 25%">信息与计算科学</td>',
                        '       <td style="text-align: right">2010.9 ~ 2014.6</td>',
                        '   </tr>',
                        '</table>'
                    ].join('')
                },
                {
                    title: '工作经历',
                    icon: 's-custom',
                    content: [
                        '<table>',
                        '   <tr>',
                        '       <td style="width: 50%">杭州圆规网络科技有限公司</td>',
                        '       <td style="width: 25%">JAVA开发</td>',
                        '       <td style="text-align: right">2015.12 ~ 至今</td>',
                        '   </tr>',
                        '   <tr>',
                        '       <td>杭州贝好科技有限公司</td>',
                        '       <td>硬件实施</td>',
                        '       <td style="text-align: right">2014.6 ~ 2015.11</td>',
                        '   </tr>',
                        '</table>'
                    ].join('')
                },
                {
                    title: '主要项目经验',
                    icon: 's-goods',
                    content: [
                        '<table class="experience">',
                        '   <tr>',
                        '       <td style="width: 50%">1. 医院随访系统</td>',
                        '       <td style="width: 25%">项目主导人</td>',
                        '       <td style="text-align: right">2020</td>',
                        '   </tr>',
                        '</table>',
                        '<p class="experience-content">',
                        '这是一个医院项目，一些做完手术的患者回家后医生需要定期对其进行调查，以往都是采用电话调查+Excel记录的方式。这套系统旨在为医生的随访工作提供方便。主要功能：<br/>',
                        '1. 患者扫描科室二维码成为科室患者并填写个人档案<br/>',
                        '2. 医生设计课题、问卷，并将患者通过课题进行分组，通过短信的方式通知患者填写问卷。患者在手机端网页填写问卷或由医生在PC端代为填写。<br/>',
                        '3. 医生通过患者的填写情况对该病种进行数据分析或针对患者病情采取相应治疗措施。<br/>',
                        '项目包含PC端，用到的技术：springboot/mybatis-plus + vue/element-ui + mysql等。<br/>',
                        '</p>',
                        '<table class="experience">',
                        '   <tr>',
                        '       <td style="width: 50%">2. 广告屏远程管理项目</td>',
                        '       <td style="width: 25%">项目主导人</td>',
                        '       <td style="text-align: right">2019</td>',
                        '   </tr>',
                        '</table>',
                        '<p class="experience-content">',
                        '该项目用于对投放在医院的广告屏进行远程控制，降低人员到现场维护的频率。主要功能：<br/>',
                        '1. 通过消息推送（广告屏其实就是个大的安卓机）来实现对广告屏的关机、重启、打开指定网页、调整音量、升级akp等远程操作。<br/>',
                        '2. 广告屏定时发送心跳表明自己在线，并携带一些相关信息传送给后台，比如4G流量、wifi列表、存储空间以及其它硬件信息等。<br/>',
                        '3. 在后台配置广告屏的节目，即展示布局以及页面跳转的等。通过手动拖拽配置广告屏幕的布局，包括按钮、链接、文字、视频、图片等。<br/>',
                        '项目包含PC端，用到的技术：springboot/mybatis-plus + vue/antd-vue + mysql等。<br/>',
                        '</p>',
                        '<table class="experience">',
                        '   <tr>',
                        '       <td style="width: 50%">3. 开发文档管理项目</td>',
                        '       <td style="width: 25%">项目主导人</td>',
                        '       <td style="text-align: right">2018</td>',
                        '   </tr>',
                        '</table>',
                        '<p class="experience-content">',
                        '用于开发组内部编写、查阅接口文档的项目。后端人员编写接口文档供前端人员查阅。以及保存一些开发过程中形成的标准化文档供组员和新人学习查阅。',
                        '</p>',
                        '<table class="experience">',
                        '   <tr>',
                        '       <td style="width: 50%">4. 公司内部OA项目</td>',
                        '       <td style="width: 25%">项目主导人</td>',
                        '       <td style="text-align: right">2017.6 ~ 2017.9</td>',
                        '   </tr>',
                        '</table>',
                        '<p class="experience-content">',
                        '该项目用于公司内部基础办公管理。包含功能有：日报、通讯录、请假、报销。用车登记、档案库、企业朋友圈等。<br/>',
                        'html页面大约50个，数据库表96个，存储过程/触发器21个。主要技术：springboot/mybatis + jquery/ajax/bootstap/highcharts + mysql等。<br/>',
                        '该项目采用多租户的设计，供多个企业使用。包含pc端、ios端、android端。<br/>',
                        '</p>',
                        '<table class="experience">',
                        '   <tr>',
                        '       <td style="width: 50%">5. 医疗服务企业CSO项目</td>',
                        '       <td style="width: 25%">项目主导人</td>',
                        '       <td style="text-align: right">2017.1 ~ 2017.3</td>',
                        '   </tr>',
                        '</table>',
                        '<p class="experience-content">',
                        '该项目主要用于医疗器械服务行业，服务商为生产厂商提供服务（送货、送票、接待客户之类的服务），并由厂商向服务商结算服务费。<br/>',
                        '大体流程为：服务商填写事务（日期、事件类型、事件内容等） -> 提交到厂家后台进行初审、复审等操作 -> 厂家定期导出pdf并结算服务费。<br/>',
                        '该项目大约30多个界面，33个数据库表，包含pc端、ios端、android端。<br/>',
                        '</p>',
                        '<table class="experience">',
                        '   <tr>',
                        '       <td style="width: 50%">6. 医疗器械ERP项目</td>',
                        '       <td style="width: 25%">项目主导人</td>',
                        '       <td style="text-align: right">2016.3 ~ 2016.10</td>',
                        '   </tr>',
                        '</table>',
                        '<p class="experience-content">',
                        '该项目用于管理公司内部医疗器械的进、销、存。大体流程是：登记客户/产品/合同等信息 -> 采购/验收/入库 -> 销售下单/出库/发货/收货 -> 开票/回款匹配。<br/>',
                        'jsp页面大约200个，数据库表131个，存储过程/触发器49个。主要技术：jsp/servlet/mysql + jquery/ajax/bootstap/highcharts + tomcat 等。<br/>',
                        '该项目采用多租户的设计，供多个其它医疗器械经销商使用。包含pc端、ios端、android端。<br/>',
                        '</p>',
                    ].join('')
                },
                {
                    title: '其它',
                    icon: 's-flag',
                    content: [
                        '<p>Github：<a href="https://github.com/labradorGitHubCanine" target="_blank">https://github.com/labradorGitHubCanine</a></p>',
                        '<p>博客：<a href="http://118.25.11.58/blog" target="_blank">http://118.25.11.58/blog（最近才搭的还没写几篇文章）</a></p>',
                        '<p>后台模板项目：<a href="http://118.25.11.58" target="_blank">http://118.25.11.58（也是最近搭的部分界面尚未完善）</a></p>',
                        '<p>个人maven工具：（开发过程中积累的一些通用工具，例如：Excel读取、生成，阿里云OSS上传、接口通用返回类等。已上传maven中央仓库）</p>',
                        '<pre>',
                        '&lt;dependency&gt;\r',
                        '       &lt;groupId&gt;com.github.labradorgithubcanine&lt;/groupId&gt;\r',
                        '       &lt;artifactId&gt;qmw-util&lt;/artifactId&gt;\r',
                        '       &lt;version&gt;{latest-version}&lt;/version&gt;\r',
                        '&lt;/dependency&gt;',
                        '</pre>',
                    ].join('')
                },
            ]
        })
    }


</script>
<style scoped>
    .main-title {
        text-align: center;
        font-size: 32px;
        font-weight: bold;
    }

    .main {
        width: 54rem;
        border-width: 0 1px 0 1px;
        border-style: solid;
        border-color: #ccc;
        padding: 32px 48px;
        margin: auto;
    }

    .content {
        margin: 32px 0 48px 0;
    }

    >>> .experience {
        font-weight: bold;
    }

    >>> table {
        width: 100%;
    }

    >>> ul {
        padding: 0;
    }

    >>> li {
        list-style: none;
    }

    >>> li::before {
        content: '\2022';
        margin-right: 16px;
        color: cornflowerblue;
    }

    >>> .experience-content {
        margin-bottom: 32px;
    }

    >>> a {
        color: darkblue;
        text-decoration: none;
    }

    >>> a:hover {
        text-decoration: underline;
    }

    >>> pre {
        padding: 8px 16px;
        line-height: 24px;
        font-family: "Source Code Pro", serif;
        border: 1px solid #dee0e3;
        background: #f5f6f7;
    }

</style>