import JsonUtil from "@/plugins/util/json-util";

export default {
    setItem(k, v) {
        localStorage.setItem(k, v);
        window.name = JSON.stringify({...JsonUtil.parseObject(window.name), k: v});
    },
    getItem(k) {
        return localStorage.getItem(k) || JsonUtil.parseObject(window.name)[k];
    },
    removeItem(k) {
        localStorage.removeItem(k);
        window.name = JSON.stringify({...JsonUtil.parseObject(window.name), k: undefined});
    },
    clear() {
        localStorage.clear();
        window.name = "{}";
    }
}
