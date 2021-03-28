<template>
    <div>

        <el-card>
            {{messages}}
            <div v-for="(i, j) in messages" :key="j"
                 :style="{textAlign: i.type === 'my' ? 'right' : 'left'}"
            >
                <div class="chat">{{i.msg}}</div>
            </div>
            <el-input v-model="msg">
                <template #append>
                    <el-button @click="send" @keyup.enter="send">发送</el-button>
                </template>
            </el-input>
        </el-card>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                url: process.env.NODE_ENV === "development" ?
                    "ws://localhost:8080/websocket" :
                    "ws://118.25.11.58:8081/websocket",
                websocket: null,
                messages: [],
                msg: null
            }
        },
        methods: {
            send() {
                if (!this.msg)
                    return;
                this.messages.push({type: 'my', msg: this.msg});
                this.websocket.send(this.msg);
                this.msg = null;
            }
        },
        created() {
            this.websocket = new WebSocket(this.url);
            this.websocket.binaryType = "arraybuffer";
            this.websocket.onmessage = e => {
                this.messages.push({type: 'other', msg: e.data});
            }
        },
        beforeDestroy() {
            if (this.websocket != null)
                this.websocket.close();
        }
    }
</script>
<style scoped>
    .chat {
        display: inline-block;
        width: auto;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 2px 12px 2px 12px;
        margin: 4px;
    }
</style>
