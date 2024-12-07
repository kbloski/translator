import { localStorageLastTranslationsKey } from "../config";

function validateTranslation(data) {
    if (!data.sourceLang) {
        console.error(
            "sourceLang is required param to saved local transaction"
        );
        return false;
    }
    if (!data.translateLang) {
        console.error(
            "translateLang is required param to saved local transaction"
        );
        return false;
    }
    if (!data.sourceText) {
        console.error(
            "sourceText is required param to saved local transaction"
        );
        return false;
    }
    if (!data.translateText) {
        console.error(
            "translateText is required param to saved local transaction"
        );
        return false;
    }

    return true;
}

export function saveTranslation(translation) {
    const isValidate = validateTranslation(translation);
    if (!isValidate) return false;

    const savedArr = getSavedTranslations();
    savedArr.push({
        id: `${translation.sourceLang}${translation.translateLang}${Math.round(Math.random() * 1000)}`,
        sourceLang: translation.sourceLang,
        translateLang: translation.translateLang,
        sourceText: translation.sourceText,
        translateText: translation.translateText,
    });
    localStorage.setItem(localStorageLastTranslationsKey, JSON.stringify( savedArr ));
    return true;
}

export function getSavedTranslations() {
    const savedTranslationsArr = localStorage.getItem(
        localStorageLastTranslationsKey
    );

    if (!savedTranslationsArr) return [];
    return JSON.parse(savedTranslationsArr);
}

export function removeTranslation(id) {
    const savedTranslations = getSavedTranslations();
    const newSavedArr = savedTranslations.filter((item) => item.id != id);
    localStorage.setItem(localStorageLastTranslationsKey, newSavedArr);
}

export function clearSavedTranslations() {
    localStorage.setItem(localStorageLastTranslationsKey, null);
}
