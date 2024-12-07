import { createStore } from "vuex";
import savedTranslations from "./savedTranslations/index";

export default createStore({
    modules: {
        savedTranslations
    },
    state() {
        return {
            sourceLanguageShort: null,
            translateLanguageShort: null,
            sourceText: null,
        };
    },
    mutations: {
        setSourceLanguage(state, payload) {
            state.sourceLanguageShort = payload; // Poprawka nazwy zmiennej
        },
        setTranslateLanguage(state, payload) {
            state.translateLanguageShort = payload;
        },
        setSourceText(state, payload) {
            state.sourceText = payload;
        },
    },
    actions: {
        setSourceLang(context, payload) {
            context.commit("setSourceLanguage", payload);
        },
        setTranslateLang(context, payload) {
            context.commit("setTranslateLanguage", payload);
        },
        setSourceText(context, payload) {
            context.commit("setSourceText", payload);
        },
    },
    getters: {
        getSourceText(state) {
            return state.sourceText;
        },
        getSourceLanguageShort(state) {
            return state.sourceLanguageShort;
        },
        getTranslateLanguageShort(state) {
            return state.translateLanguageShort;
        },
    },
});
