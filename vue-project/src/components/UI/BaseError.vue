<template>
    <div class="base-error">
        <div class="error-title">Error</div>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
$error-bgcolor: rgba(197, 0, 0, 1);
$error-color: rgb(255, 187, 0);
$border-radius: .25em;


.base-error {
    box-shadow: 0 0 4px $error-bgcolor;
    background-color: $error-bgcolor;
    color: $error-color;
    border-radius: $border-radius;
    padding: .2rem 1rem;
    margin: .5rem 0;
    position: relative;

    &:hover {
        font-weight: bold;
    }

    &:hover:after {
        // background-color: yellow;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 10px 2px $error-bgcolor;
        border-radius: $border-radius;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .error-title {
        padding-bottom: .1rem;
        margin-bottom: .3rem;
        border-bottom: 1px solid $error-color;
    }
}
</style>