<template>
    <!-- 有下级菜单递归渲染 -->
    <el-submenu v-if="menu.children && menu.children.length > 0" :index="index">
        <template v-slot:title>
            <i v-if="menu.icon" :class="menu.icon"></i>
            <span>{{menu.title}}</span>
        </template>
        <sub-menu v-for="(i, j) in menu.children" :key="j" :index="[index, j].join('-')" :menu="i"></sub-menu>
    </el-submenu>
    <!-- 无下级菜单直接渲染 -->
    <el-menu-item v-else :index="menu.page && menu.page.toLowerCase()">
        <i v-if="menu.icon" :class="menu.icon"></i>
        <template v-slot:title>
            <span>{{menu.title}}</span>
        </template>
    </el-menu-item>
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