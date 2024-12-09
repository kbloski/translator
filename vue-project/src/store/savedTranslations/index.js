import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import { localStorageLastTranslationsKey } from "@/config";

export default {
    namespaced: true,
    state: {
        savedTranslations: localStorage.getItem(localStorageLastTranslationsKey) ? JSON.parse( localStorage.getItem(localStorageLastTranslationsKey)) : [],
    },
    mutations: mutations,
    actions: actions,
    getters: getters
}

