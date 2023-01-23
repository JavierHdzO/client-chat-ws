

export const routes = [
    {
        path:'/',
        name:'auth',
        component: () => import('../views/AuthPage.vue')
    },
    {
        path:'/chat',
        name:'chat',
        component: () => import('../views/ChatPage.vue'),
        children:[
            {
                path:'',
                name:'message-chat',
                component: () => import('../components/ChatLayout.vue')
            }
        ]
    }
]