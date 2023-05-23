import { createPinia } from 'pinia'
import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')
