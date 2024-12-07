import actions from "./actions";
import mutations from "./mutations";

export default {
    namespaced: true,
    state: {
        savedTranslations: [],
    },
    mutations: mutations,
    actions: actions,
    getters: {}
}

