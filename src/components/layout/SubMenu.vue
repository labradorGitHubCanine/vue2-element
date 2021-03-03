<template>
    <div><!-- 需要一层div包裹，否则在菜单收缩状态下，当鼠标滑过带有子菜单的菜单时，会抛出异常：Maximum call stack size exceeded. -->
        <!-- 有下级菜单递归渲染 -->
        <el-submenu v-if="menu.children && menu.children.length > 0" :index="index">
            <template #title>
                <i v-if="menu.icon" :class="menu.icon"></i>
                <span>{{menu.title}}</span>
            </template>
            <sub-menu v-for="(i, j) in menu.children" :key="j" :index="[index, j].join('-')" :menu="i"></sub-menu>
        </el-submenu>
        <!-- 无下级菜单直接渲染 -->
        <el-menu-item v-else :index="menu.page && menu.page.toLowerCase()">
            <i v-if="menu.icon" :class="menu.icon"></i>
            <template #title>
                <span>{{menu.title}}</span>
            </template>
        </el-menu-item>
    </div>
</template>
<script>
    export default {
        name: 'SubMenu',
        props: {
            menu: {type: Object, require: true},
            index: {type: Number, require: true}
        }
    }
</script>
<style scoped>

</style>
