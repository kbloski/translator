import { createApp } from 'vue'
import App from './App.vue'
import { defineAsyncComponent } from 'vue'

const BaseSelect = defineAsyncComponent( () => import('./components/UI/BaseSelect.vue'))
const app = createApp(App)
app.component('base-select', BaseSelect)


app.mount('#app')
