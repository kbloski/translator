export default {
    setTranslations( state, payload){
        state.savedTranslations = payload
    },
    addTranslation( state, payload){
        if (Array.isArray( state.savedTranslations)) state.savedTranslations.push( payload);
    },
    clearTranslations(){
        state.savedTranslations = []
    }
}