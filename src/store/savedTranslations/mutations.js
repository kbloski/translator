import { getSavedTranslations } from "@/utils/savedTranslationsManger"

export default {
    loadTranslations( state, payload){
        state.savedTranslations = getSavedTranslations();
    },
    clearTranslations(){
        state.savedTranslations = []
    }
}