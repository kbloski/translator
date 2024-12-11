<template>
    <teleport to="body">
        <div 
            v-if="visible"
            class="modal-backdrop" 
        >
            <div class="modal-container">
                <slot></slot>
                <button class="modal-btn-close">Close</button>
            </div>
        </div>
    </teleport>
</template>

<script>
export default {
    data(){
        return {
            visible: true
        }
    }
}
</script>

<style lang="scss" scoped>
.modal-backdrop {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-container { 
    min-height: 50vh;
    min-width: 350px;
    background-color: white;
    color: black;
    padding: 1rem;
    border-radius: .5rem;
    margin: 1rem;
    position: relative;
    overflow: hidden;
}

.modal-btn-close {
    align-items: center;
    background-color: rgb(165, 0, 0);
    color: white;
    border-radius: 0 0 0 1rem;
    border: 0;
    display: flex;
    font-weight: bold;
    justify-content: center;
    position: absolute;
    padding: .5rem 1rem;
    right: 0rem;
    top: 0rem;
}
</style>