<template>
    <pre>
        一般在项目中我们使用localStorage或sessionStorage来将数据存储到本地，比如token或用户信息等。
        但当用户开启浏览器无痕模式时，本地存储功能会失效，导致无法正常登录等异常。
        因此针对这一现象单独封装了一个工具来替代localStorage和sessionStorage。
        其原理也很简单，先判断localStorage或sessionStorage能否正常工作，不能的话就使用window.name来进行存储
        window.name在页面关闭前不会丢失数据
    </pre>
</template>
<script>
    export default {}
</script>