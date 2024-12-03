<template>
    <select 
        :class="{
            'base-select':true,
            active: isSelected
        }"
        v-model="selectedValue" 
        @change="changeValue"
    >
        <slot></slot>
    </select>
</template>

<script>
export default {
    props: ['title', 'modelValue'],
    emits: ["update:modelValue"],
    data(){
        return {
            selectedValue: null
        }
    },
    computed: {
        isSelected(){
            return !!this.selectedValue
        }
    },
    methods: {
        changeValue(){
            this.$emit('update:modelValue', this.selectedValue)
        }
    }

}
</script>

<style lang="scss">
.base-select {
    position: relative;
    background-color: rgba(255, 255, 255, 0.4);
    width: 100%;
    padding-left: 10px;
    color: rgb(204, 204, 204);
        
    &.active {
        color: white;
    }

    & option {
        color: black;
    }
}
</style>