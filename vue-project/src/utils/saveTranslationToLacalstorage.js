import { localStorageLastTranslationsKey } from '../config'

export function getSavedTranslations(){
    const savedTranslationsArr = localStorage.getItem( localStorageLastTranslationsKey)

    if (!savedTranslationsArr) return [];
    return JSON.parse( savedTranslationsArr)
}

export function clearSavedTranslations(){
    localStorage.setItem(localStorageLastTranslationsKey, null)
}

export function addSavedTranslation(
    sourceLang,
    translateLang,
    sourceText,
    translateText,
){
   const savedArr =  getSavedTranslations();
   savedArr.push({
        sourceLang,
        translateLang,
        sourceText,
        translateText
   })
   localStorage.setItem( localStorageLastTranslationsKey, savedArr)
}