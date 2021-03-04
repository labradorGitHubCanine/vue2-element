<template>
    <el-container>
        <aside-menu/>
        <el-container class="is-vertical">
            <header-bar/>
            <el-scrollbar>
                <el-main id="main-container">
                    <keep-alive>
                        <router-view style="min-height: 36rem"/>
                    </keep-alive>
                    <footer-bar/>
                </el-main>
            </el-scrollbar>
        </el-container>
    </el-container>
</template>
<script>
    import AsideMenu from "@/components/layout/AsideMenu";
    import FooterBar from "@/components/layout/FooterBar";
    import HeaderBar from "@/components/layout/HeaderBar";

    export default {
        components: {AsideMenu, FooterBar, HeaderBar},
    }
</script>
