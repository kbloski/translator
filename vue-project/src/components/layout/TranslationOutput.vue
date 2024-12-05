<template>
    <div class="container">
        <div class="content">
            <base-error>test</base-error>
            {{ loading }}
            {{ translatedText }}
        </div>
    </div>
</template>

<script>
import { useFetch } from '../../hooks/useFetch';

export default {
    data(){
        return{
            fetchTranslate: useFetch(),
            translatedText: "Przetłumaczyć coś dla ciebie?"
        }
    },
    watch: {
        sourceTextVuex( newVal , oldVal ){
            if (!newVal) return;
            if (oldVal && newVal.trim() === oldVal.trim()) return;
            this.fetchTranslate.setNewUrl( this.createApiLink(newVal) );
        }
    },
    computed: {
        translatedText(){
            return this.fetchTranslate.data?.responseData?.translatedText
        },
        loading(){
            return this.fetchTranslate.loading
        },
        sourceTextVuex(){
            return this.$store.getters['getSourceText']
        },
        sourceLangShort(){
            return this.$store.getters['getSourceLanguageShort']
        },
        translateLangShort(){
            return this.$store.getters['getTranslateLanguageShort']
        },
    },
    methods: {
        createApiLink( textToTranslate ){
            let textInLink = textToTranslate.replaceAll(' ','%20' )

            const newUrl = 
            `https://api.mymemory.translated.net/get?q=${textInLink}&langpair=${this.sourceLangShort}|${this.translateLangShort}`

            return newUrl
        }
    }
}
</script>

<style lang="scss" scoped>
$background-content: rgba(240, 248, 255, 0.7);

.content {
    background-color:$background-content;
    box-shadow: 0 0 8px $background-content;
    backdrop-filter: blur(8px);
    color: black;

    padding: 1rem;
    height: 100%;
    word-break: break-all;
    word-wrap: break-word;
    flex-wrap: wrap;
}
</style>
