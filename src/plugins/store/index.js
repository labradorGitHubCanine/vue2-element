const Vue = window.Vue

export const store = Vue.observable({
    count: 1
})

export const mutations = {
    add() {
        store.count++;
    }
}