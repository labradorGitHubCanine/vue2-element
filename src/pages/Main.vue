<template>
    <el-container>
        <aside-menu/>
        <el-container class="is-vertical">
            <header-bar/>
            <el-main style="padding-top: 0">
                <nav-tab/>
                <router-view/>
                <footer-bar/>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    import AsideMenu from "@/components/layout/AsideMenu";
    import FooterBar from "@/components/layout/FooterBar";
    import HeaderBar from "@/components/layout/HeaderBar";
    import NavTab from "@/components/layout/NavTab";

    export default {
        components: {AsideMenu, NavTab, FooterBar, HeaderBar},
    }
</script>
