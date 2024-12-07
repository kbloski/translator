import { localStorageLastTranslationsKey } from '../config'

export function getSavedTranslations(){
    const savedTranslationsArr = localStorage.getItem( localStorageLastTranslationsKey)

    if (!savedTranslationsArr) return [];
    return JSON.parse( savedTranslationsArr)
}

export function clearSavedTranslations(){
    localStorage.setItem(localStorageLastTranslationsKey, null)
}

export function removeTranslation( id ){
    const savedTranslations = getSavedTranslations();
    const newSavedArr = savedTranslations.filter( item => item.id != id);
    localStorage.setItem( localStorageLastTranslationsKey, newSavedArr)
}

export function addSavedTranslation(
    sourceLang,
    translateLang,
    sourceText,
    translateText,
){
   const savedArr =  getSavedTranslations();
   savedArr.push({
        id: `${sourceLang}${translateLang}${Math.round(Math.random() * 1000)}`,
        sourceLang,
        translateLang,
        sourceText,
        translateText
   })
   localStorage.setItem( localStorageLastTranslationsKey, savedArr)
}