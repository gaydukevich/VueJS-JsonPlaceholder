import Main from '@/pages/Main.vue'
import PostPage from '@/pages/PostPage.vue'
import UserPage from '@/pages/UserPage.vue'

import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/postPage',
        component: PostPage
    },
    {
        path: '/',
        component: Main
    },
    {
        path: '/userPage',
        component: UserPage
    }
]

const router = createRouter ({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;