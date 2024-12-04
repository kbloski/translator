<template>
    <div class="container">
        <button>Translate</button>
        <h4>From</h4>
        <base-select 
            title="select source language"
            class="select-language"
        >
            <option 
                v-for="language of languages"
                :value="language.short"
            >
                {{  language.language }}
            </option>
        </base-select>
        <h4>To</h4>
        <base-select 
            title="select source language"
            class="select-language"
        >
             <option 
                v-for="language of languages"
                :value="language.short"
            >
                {{  language.language }}
            </option>
        </base-select>

        <h3>Soruce code</h3>
        <div class="content">
            <textarea spellcheck="false"></textarea>
        </div>
    </div>
</template>

<script>
import { computed, watch } from 'vue';
import { useFetch } from '../../hooks/useFetch.js';
export default {
    setup(){
        const languagesFetch = useFetch('/languages.json')
        const languagesArr = computed( () => languagesFetch.data.value?.languages.sort( (a,b) => {
                if (a.language < b.language) return -1;
                if (a.language > b.language) return 1;
                return 0;
        }) ?? [] )

        return {
            loading: languagesFetch.loading,
            languages: languagesArr,
            errors: languagesFetch.errorMessage
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    width: 40vw;

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
    
}


</style>