import { createRouter, createWebHistory } from "vue-router";

import index from "../views/index.vue";
import curriculum_vitae from "../views/my_cv.vue";
import blog from "../views/blog_page.vue";
import contact from "../views/contact_page.vue";

const routes = [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/Curriculum_vitae',
        name: 'Curriculum_vitae',
        component: curriculum_vitae
    },
    {
        path: '/Blog',
        name: 'Blog',
        component: blog
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: contact
    }

]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router