import {
    saveTranslation,
    getSavedTranslations,
    clearSavedTranslations,
    removeTranslation
} from '../../utils/savedTranslationsManger'

export default {
    saveTranslation( contex , payload){
        if (!payload) throw new Error("Error saveTranslation, please provide object to save.")

        const isSaved = saveTranslation( payload );
        contex.commit('setTranslations', payload);
    },
}