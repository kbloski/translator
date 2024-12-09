<template>
    <transition name="sidevar-transition">
        <div class="container-sidebar" v-if="visible">
            <header>
                <h2>Lastest Transactions</h2>
                <button @click="closeSidebar">X</button>
            </header>
            <ul>
                <li v-for="translate in savedTranslations">
                    <!-- {{ translate.id }} -->
                    <!-- {{ translate.sourceLang }} -->
                    <!-- {{ translate.translateLang }} -->
                    {{ translate.sourceText }}
                    {{ translate.translateText }}
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
export default {
    emits: [''],
    data() {
        return {
            visible: false,
        };
    },
    computed:{
        savedTranslations(){
            return this.$store.getters['savedTranslations/getSavedTranslations']
        }
    },
    methods: {
        closeSidebar() {
            this.visible = false;
        },
        openSidebar(){
            this.visible = true;
        }
    },
    // created(){
    //     console.log( this.$store.getters['savedTranslations/getSavedTranslations'])
    // }
};
</script>

<style lang="scss" scoped>
$color-elements: rgba(67, 97, 161, 0.9);
$color-elements-hover: rgba(51, 86, 161, 1);

.sidevar-transition {
    &-enter,
    &-leave {
        &-active {
            transition: all 1s ease;
        }
    }

    &-enter {
        &-from {
            opacity: 0;
            transform: translate(-100%);
        }

        &-to {
            opacity: 1;
        }
    }

    &-leave {
        &-from {
            opacity: 1;
        }

        &-to {
            opacity: 0;
            transform: translate(-100%);
        }
    }
}

.container-sidebar {
    position: fixed;
    left: 0;
    background-color: rgba(67, 97, 161, 0.274);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px $color-elements;
    top: 0;
    max-width: 30vw;
    height: 100vh;
    z-index: 100;

    header {
        position: relative;

        h2 {
            text-align: center;
        }

        button {
            aspect-ratio: 1/1;
            background-color: $color-elements;
            color: white;
            border: 0;
            box-shadow: 0 0 4px rgb(143, 182, 255);
            height: 100%;
            position: absolute;
            right: 1rem;
            top: 0;
            cursor: pointer;

            &:hover {
                background-color: $color-elements-hover;
            }
        }
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 2rem;
        overflow-y: scroll;
        // max-height: calc(90vh);
        height: 100%;

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: $color-elements;
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background-color: $color-elements-hover;
            border-radius: 5px;
        }

        &::-webkit-scrollbar-track {
            background-color: rgba(0, 0, 0, 0.1);
        }

        li {
            margin-top: 1rem;
            padding: 1rem;
            background-color: $color-elements;
            cursor: pointer;
            max-height: 100px;
            overflow: hidden;

            &:hover {
                background-color: $color-elements-hover;
            }
        }
    }
}
</style>
