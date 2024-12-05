import { createApp } from 'vue'
import App from './App.vue'
import { defineAsyncComponent } from 'vue'

import store from './store'

const BaseSelect = defineAsyncComponent( () => import('./components/UI/BaseSelect.vue'))
const BaseError = defineAsyncComponent( () => import('./components/UI/BaseError.vue'))

const app = createApp(App)

app.use( store )
app.component('base-select', BaseSelect)
app.component('base-error', BaseError)


app.mount('#app')
