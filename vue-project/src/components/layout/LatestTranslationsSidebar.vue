<template>
    <transition name="sidevar-transition">
        <div class="container-sidebar" v-if="visible">
            <header>
                <h2>Lastest Transactions</h2>
                <button @click="closeSidebar">X</button>
            </header>
            <ul>
                <li v-for="translate in savedTranslations">
                    <div>
                        {{ translate.sourceLang  }}
                        {{ cutTextToLength( translate.sourceText ) }}
                    </div>
                    <div>
                        {{ translate.translateLang  }}
                        {{ cutTextToLength( translate.translateText ) }}
                    </div>
                    <button @click="() => removeTranslation(translate.id)" >X</button>
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
            // visible: false,
            visible: true,
        };
    },
    computed:{
        savedTranslations(){
            return this.$store.getters['savedTranslations/getSavedTranslations']
        }
    },
    methods: {
        removeTranslation( id ){
            this.$store.dispatch('savedTranslations/deleteById', id)
        },
        closeSidebar() {
            this.visible = false;
        },
        openSidebar(){
            this.visible = true;
        },
        cutTextToLength( text, length = 20 ){
            if (text.length < length) return text;

            return text.slice(0, length).trim() + '...'
        }
    },
};
</script>

<style lang="scss" scoped>
$background-sidebar-color:  rgba(168, 168, 168, 0.274);;
$color-elements: rgba(133, 133, 133, 0.9);
$color-elements-hover: rgb(146, 146, 146);

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
    background-color: $background-sidebar-color;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px $color-elements;
    top: 0;
    max-width: 350px;
    height: 100vh;
    z-index: 100;
    padding-top: 1rem;

    header {
        position: relative;

        h2 {
            text-align: center;
            max-width: 50%;
            margin: 0 auto;
        }

        button {
            aspect-ratio: 1/1;
            background-color: $color-elements;
            border: 0;
            box-shadow: 0 0 4px $color-elements-hover;
            cursor: pointer;
            color: white;
            position: absolute;
            top: 0;
            right: 1rem;
            width: 40px;

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
            position: relative;

            &:hover {
                background-color: $color-elements-hover;
            }

            & > * {
                margin-bottom: .2rem;
            }

            & > button {
                position: absolute;
                right: 0;
                top: 0;
                transform: translate( 50%, -20%);
                background-color: rgba(151, 1, 1, 0.733);
                border: none;
                color: white;
                float: right;
                height: 25px;
                border-radius: 50%;
                aspect-ratio: 1/1;
                padding: .2rem;
                cursor: pointer;
            }
        }
    }
}
</style>
