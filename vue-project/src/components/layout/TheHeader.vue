<template>
    <latest-translations ref="sidebar-translations"></latest-translations>
    <header>
        <button class="btn" @click="openSidebar">☰</button>
        <h1>{{ appName }}</h1>
        <div class="">
        
        </div>
    </header>
</template>

<script>
import { appName } from '@/config';
import LatestTranslations from "./LatestTranslationsSidebar.vue";

export default {
    components: {
        LatestTranslations
    },
    data(){
        return {
            appName,
            sidebar:null
        }
    },
    methods:{
        openSidebar(){
            this.sidebar.openSidebar()
        }
    },
    mounted(){
        this.sidebar = this.$refs['sidebar-translations']
    }
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: left;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
}

button {
    background: none;
    border: none;
    bottom: 0;
    border-radius: 1rem;
    box-shadow: none;
    color: white;
    font-size: 2rem;
    margin: 0 1rem;
    left: 1rem;

    &:hover {
        color: black;
    }
}



</style>

