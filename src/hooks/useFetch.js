import { ref, watch } from "vue";

export function useFetch( url = null, options = {}){
    const fullUrl = ref(url)
    const fetchOptions = ref( options )

    const errorMessage = ref(null);
    const data = ref( null)
    const loading = ref( false)

    function clearFetch(){
        data.value = null;
        errorMessage.value = null;
    }

    function setNewUrl(url) {
        clearFetch()
        fullUrl.value = url;
    }

    function fetchData(){
        errorMessage.value = null;
        loading.value = true;

        fetch( fullUrl.value, fetchOptions.value)
        .then( res => {
            if (!res.ok) throw new Error(`${res.status} : ${res.statusText}`);
            return res.json()
        })
        .then( jsonData => data.value = jsonData)
        .catch( err => errorMessage.value = err.message)
        .finally( () => loading.value = false)
    }

    watch( fullUrl, () => {
        if (fullUrl.value) fetchData()
    }, {
        immediate: true
    })

    return {
        data,
        loading,
        errorMessage,
        setNewUrl
    }
}