<template>
    <div class="container">
        <base-error v-if="errors.languagesFetch"> {{ errors.languagesFetch }}</base-error>
        <button @click="setTranslateData" class="btn">Translate</button>
        <h4>From</h4>
        <base-error v-if="errors.sourceLang"> {{ errors.sourceLang }}</base-error>
        <base-select 
            class="select-language"
            v-model="sourceLang"
        >
            <option 
                v-for="language of languages"
                :value="language.short"
            >
                {{  language.language }}
            </option>
        </base-select>
        <h4>To</h4>
        <base-error v-if="errors.translateLang"> {{ errors.translateLang }}</base-error>
        <base-select 
            class="select-language"
            v-model="translateLang"
        >
             <option 
                v-for="language of languages"
                :value="language.short"
            >
                {{  language.language }}
            </option>
        </base-select>

        <h3>Soruce code</h3>
        <base-error v-if="errors.sourceText"> {{ errors.sourceText }}</base-error>
        <div class="content">
            <textarea spellcheck="false" v-model="sourceText"></textarea>
        </div>
    </div>
</template>

<script>
import { computed, ref, reactive } from 'vue';
import { useFetch } from '../../hooks/useFetch.js';
import { useStore } from 'vuex';
export default {
    setup( props ){
        const store = useStore();

        const languagesFetch = useFetch('/languages.json')
        const languagesArr = computed( () => languagesFetch.data.value?.languages.sort( (a,b) => {
                if (a.language < b.language) return -1;
                if (a.language > b.language) return 1;
                return 0;
        }) ?? [] )
        const sourceLang = ref(null)
        const translateLang = ref(null)
        const sourceText = ref('')

        const errors = reactive({
            isError: computed( () => 
                !!errors.sourceLang || 
                !!errors.sourceText || 
                !!errors.translateLang ||
                !!errors.languagesFetch
            ),
            sourceLang: null, 
            translateLang: null,
            sourceText: null,
            languagesFetch: computed( () => languagesFetch.errorMessage.value ? "Problem with loading languages." : null )
        })

        function clearErrors(){
            errors.sourceLang = null;
            errors.translateLang = null;
            errors.sourceText = null
        }

        function validateTranslation(){
            clearErrors();

            if (!sourceLang.value) errors.sourceLang = "Source lang can't be empty."
            if (!sourceText.value) errors.sourceText = "Source code can't be empty."
            if (!translateLang.value) errors.translateLang = "Translate lang can't be empty."

            if ( sourceLang.value && translateLang.value && sourceLang.value === translateLang.value) {
                errors.translateLang = errors.sourceLang = "Source lang and translate lang can't be the same."
            }
        }
        
        function setTranslateData(){
            validateTranslation();
            if (errors.isError) return;

            store.dispatch('setSourceLang', sourceLang.value)
            store.dispatch('setTranslateLang', translateLang.value)
            store.dispatch('setSourceText', sourceText.value)
        }

        return {
            loading: languagesFetch.loading,
            languages: languagesArr,
            errors,
            sourceText,
            setTranslateData,
            sourceLang,
            translateLang
        }
    }
}
</script>

<style lang="scss" scoped>

.select-language {
    font-size: 24px;
    text-align: center;
    text-transform: capitalize;

    option {
        text-align: left;
    }
}

.content {
    position: relative;
    height: 400px;
    
    textarea {
        width: 100%;
        height: 100%;
        resize: vertical;
        border-radius: 1rem;
        background-color: rgba(255,255,255, .3);
        padding: 1rem;
        color: white;
        
    }
}
    



</style>