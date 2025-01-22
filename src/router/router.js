import { createRouter, createWebHistory } from "vue-router";

import home_page from '../views/home_page.vue'
import index from "../views/index.vue";

const routes = [
    {
        path: '/home',
        name: 'home_page',
        component: home_page
    },
    {
        path: '/',
        name: 'index',
        component: index
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router