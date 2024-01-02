import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const gyzer = createApp(App)
gyzer.use(router)
gyzer.mount('#app')
