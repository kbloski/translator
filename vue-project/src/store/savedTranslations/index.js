export default {
    namespaced: true,
    state: {
        savedTranslations: [],
    },
    mutations: {
        saveTranslation(state, payload){
            localStorage.
            state.savedTranslations.push(payload)
        },
    },
    actions: {},
    getters: {}
}

