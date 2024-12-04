<template>
    <div class="container">
        <h4>From</h4>
        <base-select 
            title="select source language"
            class="select-language"
        >
            <option value="test">test</option>
        </base-select>
        <h4>To</h4>
        <base-select 
            title="select source language"
            class="select-language"
        >
            <option value="test">test</option>
        </base-select>

        <h3>Soruce code</h3>
        <div class="content">
            <textarea spellcheck="false"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    setup(){
        fetch('/languages.json')
        .then( res => {
            if (!res.ok) console.error('eerr');
            return res.json()
        })
        .then( data => {
            console.log( data )
        })
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    width: 40vw;

    .select-language {
        margin: 0 .5rem;
        font-size: 24px;
        text-align: center;

        option {
            text-align: left;
        }
    }
    
    .content {
        position: relative;
        height: 400px;
        
        textarea {
            width: 100%;
            height: 100%;
            resize: vertical;
            border-radius: 1rem;
            background-color: rgba(255,255,255, .3);
            padding: 1rem;
            color: white;
        }
    }
    
}


</style>