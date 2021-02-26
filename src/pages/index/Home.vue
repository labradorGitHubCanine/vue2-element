<template>
    <pre>
        本后台管理框架基于vue2.x和element-ui编写，不定期更新功能。
        所有插件引入方式都是基于CDN：<a target="_blank" href="https://www.jsdelivr.com/">jsdelivr</a>，这样在部署后可以有一个比较快的首页加载速度。但也有一定的缺点：
        1、依赖于第三方网站、如果被墙或网站出问题也会被牵连
        2、内网环境无法部署
        解决方法：
        1、将js、css下载下来放到项目中
        2、改为webpack引入
        针对于首页加载慢的问题，也可以使用SSR
    </pre>
</template>
<script>
    export default {}
</script>