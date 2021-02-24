<template>
    <el-submenu v-if="menu.children && menu.children.length > 0" :index="index">
        <template v-slot:title>
            <i v-if="menu.icon" :class="menu.icon"></i>
            <a>{{menu.title}}</a>
        </template>
        <sub-menu v-for="(i, j) in menu.children" :key="j" :index="j" :menu="i"></sub-menu>
    </el-submenu>
    <el-menu-item v-else :index="menu.page && menu.page.toLowerCase()">
        <template v-slot:title>
            <i v-if="menu.icon" :class="menu.icon"></i>
            <a>{{menu.title}}</a>
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