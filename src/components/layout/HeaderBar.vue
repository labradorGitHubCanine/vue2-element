<template>
    <el-header>
        <el-button type="text" @click="collapse"
                   :icon="'el-icon-s-' + (isCollapse ? 'unfold' : 'fold')"
        ></el-button>
        <div>
            <el-button type="text" icon="el-icon-message"></el-button>
            <el-button type="text" icon="el-icon-setting"></el-button>
            <el-dropdown @command="command" show-timeout="0">
                <el-button type="text" style="margin: 0 !important;" icon="el-icon-user"></el-button>
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
        box-shadow: 0 1px 4px rgba(0, 21, 41, .05);
        z-index: 1;
    }

    header div > * {
        margin: 0 8px 0 8px !important;
    }

    .el-button--text {
        font-size: 20px;
    }
</style>
