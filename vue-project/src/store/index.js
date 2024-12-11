import { createStore } from "vuex";
import savedTranslations from "./savedTranslations/index";

export default createStore({
    modules: {
        savedTranslations
    },
});
