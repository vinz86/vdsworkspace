//import './assets/auth.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import routerAuth from './routerAuth'

const app = createApp(App)

app.use(createPinia())
app.use(routerAuth)

app.mount('#app')
