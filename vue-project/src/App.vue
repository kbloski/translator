<template>
    <the-header></the-header>
    <div class="page-container">
        <translation-source></translation-source>
        <translation-output></translation-output>
    </div>
</template>

<script>

import TranslationSource from "./components/layout/TranslationSource.vue";
import TranslationOutput from "./components/layout/TranslationOutput.vue";
import TheHeader from "./components/layout/TheHeader.vue";

export default {
    components: {
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
    margin: 0 auto;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    max-width: 1000px;
    background-size: cover;
    
    &:before {
        content: '';
        position: fixed;
        left: 0;
        top: 0;
        min-width: 100vw;
        min-height: 100vh;
        background: url('./background-img.png') no-repeat center;
        z-index: -1;
    }
}

.container {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 50vw;
}

.btn {
    padding: .5rem 1rem;
    background-color: aliceblue;
    box-shadow: 0 0 4px aliceblue;
    cursor: pointer;

    &:hover {
        background-color: rgb(210, 234, 255);
    }
}



</style>
