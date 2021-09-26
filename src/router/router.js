import PostPage from '@/pages/PostPage.vue'
import Main from '@/pages/Main.vue'
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/postPage',
        component: PostPage
    },
    {
        path: '/',
        component: Main
    }
]

const router = createRouter ({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;