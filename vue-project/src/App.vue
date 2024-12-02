<template>
  <div class="page-container">
      <latest-translations></latest-translations>
  </div>
      {{ clientLanguage }}
</template>

<script>
import LatestTranslations from './components/layout/LatestTranslations.vue';

export default {
  components: {
    LatestTranslations
  },
  setup(props) {
    const clientLanguage = navigator.language;

    return {
      clientLanguage
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body {
  margin: 0;
  padding: 0;
}
.page-container {
  display: flex;
  justify-content: center;
}

</style>