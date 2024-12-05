<template>
    <header>
        <h1>{{ appName }}</h1>
    </header>
</template>

<script>
import { appName } from '@/config';
export default {
    data(){
        return {
            appName
        }
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

