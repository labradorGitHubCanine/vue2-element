<template>
    <el-header id="header-bar">
        <el-button type="text"
                   :icon="'el-icon-s-' + (isCollapse ? 'unfold' : 'fold')"
                   style="font-size: 24px"
                   @click="collapse"></el-button>
        <div>
            <el-button circle type="info" icon="el-icon-message"></el-button>
            <el-button circle type="success" icon="el-icon-setting"></el-button>
            <el-dropdown @command="command" show-timeout="0">
                <el-button circle type="primary" style="margin: 0 !important;" icon="el-icon-user"></el-button>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item icon="el-icon-user">个人信息</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-key">修改密码</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-switch-button" command="logout" divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>
<script>
    import {mutations, store} from "@/plugins/store";

    export default {
        computed: {
            isCollapse() {
                return store.asideMenuIsCollapse;
            }
        },
        methods: {
            collapse() {
                mutations.collapseMenu();
            },
            command(e) {
                switch (e) {
                    case 'logout':
                        this.$confirm('确认退出登录？', {type: 'warning'}).then(() => {
                            this.$router.push({name: 'login'});
                        });
                        break;
                }
            }
        },
    }
</script>
<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
        z-index: 1;
    }

    header div > * {
        margin: 0 4px 0 4px !important;
    }
</style>
