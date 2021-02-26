<template>
    <pre>
        菜单配置文件存储在/src/assets/json/menus.json，其格式为
        <code>
            [
                {
                    "title": "菜单名称",
                    "icon": "菜单图标",
                    "page": "要跳转的页面，相对于/src/page/index/下的路径",
                    "children": [ "子菜单" ]
                }
            ]
        </code>
        菜单无限递归，超出菜单宽度请自行调整样式。
        菜单信息会自动动态添加至路由信息中，并和storage结合，刷新页面不会丢失动态添加的路由信息
        采用接口请求获取的菜单，请自行转化为上述格式
    </pre>
</template>
<script>
    export default {}
</script>