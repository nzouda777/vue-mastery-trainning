import { createRouter, createWebHistory } from 'vue-router'
import PageHome from "@/components/PageHome"
import PageThreadShow from "@/components/PageThreadShow"
import PageNotFound from "@/components/PageNotFound"

import sourceData from '@/data.json'

const routes = [
    
    {
        path: '/',
        name: 'Home',
        component: PageHome
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: PageThreadShow,
        props: true,
        beforeEnter (to, from, next){
            // check if thread exists
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
            // if if exists continue & if doesn't exist redirect to not found
            return threadExists ? next() : next({name: 'NotFound', params: { pathMatch: to.path.substring(1).split('/')}, query: to.query, hash: to.hash })
            // 
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: PageNotFound
    }
]

export default createRouter( {
    history: createWebHistory(),
    routes
})