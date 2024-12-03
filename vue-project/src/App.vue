<template>
    <the-header></the-header>
    <latest-translations></latest-translations>
    <div class="page-container">
        <translation-source></translation-source>
        <translation-output></translation-output>
    </div>
</template>

<script>
import LatestTranslations from "./components/layout/LatestTranslationsSidebar.vue";
import TranslationSource from "./components/layout/TranslationSource.vue";
import TranslationOutput from "./components/layout/TranslationOutput.vue";
import TheHeader from "./components/layout/TheHeader.vue";

export default {
    components: {
        LatestTranslations,
        TranslationSource,
        TranslationOutput,
        TheHeader
    },
    setup(props) {
        const clientLanguage = navigator.language;

        return {
            clientLanguage,
        };
    },
};
</script>

<style lang="scss">
$header-height: 100px;

* {
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body {
    margin: 0;
    padding: 0;
    color: white;
}

.page-container {
    padding-top: $header-height;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    overflow-y: auto;
    background: url('./background-img.png') no-repeat center;
    background-size: cover;
}



</style>
