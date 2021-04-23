<template>
    <el-header>
        <el-button type="text" @click="$store.commit('collapseMenu')"
                   :icon="'el-icon-s-' + ($store.state.asideMenuIsCollapsed ? 'unfold' : 'fold')"
        ></el-button>
        <div>
            <el-button type="text" icon="el-icon-message" @click="$refs['message-center'].show()"></el-button>
            <el-button type="text" icon="el-icon-setting" @click="jump('settings')"></el-button>
            <el-dropdown @command="command" show-timeout="0">
                <el-button type="text" style="margin: 0 !important;" icon="el-icon-user"></el-button>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item icon="el-icon-user" command="personal-center">个人中心</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-switch-button" command="logout" divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

        <message-center ref="message-center"></message-center>

    </el-header>
</template>
<script>

    export default {
        methods: {
            command(e) {
                switch (e) {
                    case 'logout':
                        this.$confirm('确认退出登录？', {type: 'warning'}).then(() => {
                            this.$router.push({name: 'login'});
                        });
                        break;
                    case 'personal-center':
                        this.jump(e);
                        break;
                }
            },
            jump(name) {
                this.$router.push({name});
                this.$store.commit('setActiveMenuName', null);
            }
        },
        components: {
            MessageCenter: ()=>import('@/pages/index/MessageCenter')
        }
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
        margin: 0 2px 0 2px !important;
    }

    .el-button--text {
        font-size: 20px;
        padding: 12px 8px;
    }

    .el-button--text:hover {
        background-color: #eee;
    }
</style>
