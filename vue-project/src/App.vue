<template>
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

export default {
    components: {
        LatestTranslations,
        TranslationSource,
        TranslationOutput,
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
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    overflow-y: auto;
    background: url('./background-img.png') no-repeat center;
    background-size: cover;
}
</style>
