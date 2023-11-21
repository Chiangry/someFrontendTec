import { createRouter, createWebHashHistory } from "vue-router"
 
const routes = [
    {
        path: "/",
        redirect: "/home",
      },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/virtualList',
        name: 'virtualList',
        component: () => import('../views/createVirtualList.vue')
    },
    {
        path: '/cssAbout',
        name: 'cssAbout',
        component: () => import('../views/cssAbout.vue')
    }
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
 
export default router
