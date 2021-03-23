<template>

    <div>
        <el-header style="position: sticky; top: 0; background-color: white; padding-top: 15px">
            <el-tabs>
                <el-tab-pane label="博客"></el-tab-pane>
                <el-tab-pane label="资源"></el-tab-pane>
                <el-tab-pane label="留言板"></el-tab-pane>
            </el-tabs>
        </el-header>

<!--        <div style="height: 600px; background-attachment: fixed" :style="{backgroundImage: `url(${bg})`}"></div>-->

        <el-main v-loading="loading">

            <el-form inline>
                <el-form-item>
                    <el-input v-model="form.title" placeholder="搜索标题" suffix-icon="el-icon-search" clearable></el-input>
                </el-form-item>
                <el-form-item>
                    <el-radio-group v-model="form.label">
                        <el-radio-button :label="undefined">全部</el-radio-button>
                        <el-radio-button v-for="i in labels" :key="i" :label="i"></el-radio-button>
                    </el-radio-group>
                </el-form-item>
            </el-form>

            <el-table :data="records" size="large" :show-header="false">
                <el-table-column>
                    <template #default="{row}">
                        <div>
                            <el-link @click="open(row)">{{row.title}}</el-link>
                        </div>
                        <div>
                            <small>
                                <i class="el-icon-date"></i>
                                {{row.createTime}}
                                <i class="el-icon-view"></i>
                                {{ row.look }}
                            </small>
                        </div>
                        <div>
                            <el-tag size="mini" type="success" v-for="i in row.label.split(',')" :key="i">{{i}}</el-tag>
                        </div>
                    </template>
                </el-table-column>
            </el-table>

        </el-main>
    </div>

</template>
<script>

    export default {
        data: () => ({
            bg: require('@/assets/image/bg01.jpg'),
            loading: false,
            form: {},
            records: [],
            labels: []
        }),
        methods: {
            list() {
                this.loading = true;
                this.$axios.get('blog', {params: this.form}).then(e => {
                    this.records = e.records;
                    this.labels = e.extra.labels;
                }).finally(() => this.loading = false);
            },
            open({id, url}) {
                window.open(url);
                this.$axios.post('blog/look', {id: id}).then(() => this.list());
            },
        },
        watch: {
            form: {
                'handler'() {
                    this.list()
                },
                deep: true
            }
        },
        created() {
            this.list();
        }
    }
</script>
