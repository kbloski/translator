<template>
    <teleport to="body">
        <div>
                <div 
                    v-if="visible"
                    class="modal-backdrop" 
                >
                    <div class="modal-container">
                        <slot></slot>
                        <button class="modal-btn-close" @click="closeModal">Close</button>
                    </div>
                </div>
        </div>
    </teleport>
</template>

<script>
export default {
    data(){
        return {
            visible: false
        }
    },
    methods: {
        closeModal(){
            this.visible = false;
        },
        openModal(){
            this.visible = true;
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
    max-width: 1000px;
    max-height: 90vh;
    background-color: white;
    color: black;
    padding: 1rem;
    border-radius: .5rem;
    margin: 1rem;
    position: relative;
    overflow: hidden;
    overflow-y: auto;
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
    cursor: pointer;

    &:hover {
        background-color: rgb(180, 0, 0);
    }
}
</style>