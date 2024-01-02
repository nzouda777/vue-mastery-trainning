import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PageHome from "@/components/PageHome"


const routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome
    }
]

const router = createRouter( {
    history: createWebHistory(),
    routes
})

const gyzer = createApp(App)
gyzer.use(router)
gyzer.mount('#app')
