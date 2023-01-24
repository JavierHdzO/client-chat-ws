import { authGuard } from './guards/auth-guard'

export const routes = [
    {
        path:'/',
        name:'auth',
        component: () => import('../views/AuthPage.vue')
    },
    {
        path:'/chat',
        name:'chat',
        beforeEnter: [authGuard],
        component: () => import('../views/ChatPage.vue'),
        children:[
            {
                path:'',
                name:'message-chat',
                component: () => import('../layouts/ChatLayout.vue')
            }
        ]
    },

    {
        path:'/test',
        name:'test',
        beforeEnter: [authGuard],
        component: () => import('../components/ChatLayout.vue')
    }
]