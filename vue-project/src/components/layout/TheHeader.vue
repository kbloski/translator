<template>
    <latest-translations ref="sidebar-translations"></latest-translations>
    <header>
        <h1>{{ appName }}</h1>
        <button @click="openSidebar">Open Sidebar</button>
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
$header-height: 100px;

header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: $header-height;
    text-align: center;
}
</style>

