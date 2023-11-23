import './assets/Posts.css'

import { createApp } from 'vue'
import App from './App.vue'
import routerPosts from './routerPosts'

const app = createApp(App)

app.use(routerPosts)

app.mount('#app')
