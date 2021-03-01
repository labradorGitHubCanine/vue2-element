<template>
    <div>
        <p>一般在项目中我们使用localStorage或sessionStorage来将数据存储到本地，比如token或用户信息等。</p>
        <p>但当用户开启浏览器无痕模式时，本地存储功能会失效，导致无法正常登录等异常。 因此针对这一现象单独封装了一个工具来替代localStorage和sessionStorage。</p>
        <p>其原理也很简单，先判断localStorage能否正常工作，如果不能的话就使用window.name来进行存储，window.name的特点是在浏览器窗口关闭前存储的信息不会丢失。</p>
        <p>工具位于src\plugins\util\storage-util.js</p>
    </div>
</template>
<script>
    export default {}
</script>