const Vue = window.Vue

export const store = Vue.observable({
    test: 1
});

export const mutations = {
    count() {
        store.test++;
    }
}