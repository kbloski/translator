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
        contex.commit("loadTranslations", payload);
    },

    deleteById( context, id){
        if (!id) throw new Error('Error savedTranslations/deleteById. Provide id.');

        const deleted = removeTranslation( id );
        context.commit("loadTranslations");
    }
}