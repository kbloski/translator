export default {
    setTranslations( state, payload){
        state.savedTranslations = payload
    },
    clearTranslations(){
        state.savedTranslations = []
    }
}