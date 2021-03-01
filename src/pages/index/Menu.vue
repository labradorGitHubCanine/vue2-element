<template>
    <div>
        <p>菜单配置文件存储在/src/assets/json/menus.json，单个菜单的格式如下</p>
        <pre>
            {
                "title": "菜单名称",
                "icon": "菜单图标",
                "page": "要跳转的页面，相对于/src/page/index/下的路径",
                "children": [ "子菜单" ]
            }</pre>
        <p>菜单可以无限递归渲染，若超出菜单边界请自行修改样式，不过一般也不会有那么多级。</p>
        <p>菜单信息会自动动态添加至路由信息中，并和storage-util结合，刷新页面不会丢失动态添加的路由信息。</p>
        <p>如果采用接口请求的方式获取菜单，请自行转化为上述格式。</p>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped>
    pre {
        border: 1px solid #eee;
        font-size: small;
        padding: 10px;
    }
</style>