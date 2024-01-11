import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            // 此处使用@/，使用./会无法识别
            component: () => import('@/layout/index.vue'),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/components/MainContent.vue')
                },
                {
                    path: '/detail',
                    name: 'detail',
                    component: () => import('@/components/CardDetail.vue')
                },
                {
                    path: '/shoppingCart',
                    name: 'shoppingcart',
                    component: () => import('@/components/ShoppingCart.vue')
                }
            ]
        },
        // 配置重定向
        {
            path: '/',
            redirect: '/home'
        }
    ]
})