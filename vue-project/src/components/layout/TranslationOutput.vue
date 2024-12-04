<template>
    <div class="container">
        <div class="content">
            {{  sourceText }}
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        sourceText(){
            return this.$store.getters['getSourceText']
        }
    }
}
</script>
