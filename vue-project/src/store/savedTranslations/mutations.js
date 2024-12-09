import { getSavedTranslations } from "@/utils/savedTranslationsManger"

export default {
    setTranslations( state, payload){
        state.savedTranslations = getSavedTranslations();
    },
    clearTranslations(){
        state.savedTranslations = []
    }
}