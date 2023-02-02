<template>
    <div
        :class="{'show':props.menu, 'menu-hidden':!props.menu}"
        class="container-user-list menu-hidden">
        <aside>
            <ul>
                <li>
                    {{ user.name }} (Yourself)
                    <span><StatusIcon :connected="true"/> Connected</span>
                </li>
                <li 
                    v-for="user in onlineUsers" 
                    :key="user.userId"
                    @click="selectUserChat(user)"
                    :class="{'active': user.userId === getToUser.userId  }"
                    >
                    <span>{{user.name}}</span>
                    <span><StatusIcon :connected="false" /> Connected</span>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue'
    import StatusIcon from '../components/StatusIcon.vue'
    import  useAuthWS  from '../composables/useAuthWS'
    import useSocketChat from '../composables/useSocket'
    import useChat from '../composables/useChat'

    const props =  defineProps({
        menu:{
            type: Boolean,
            default: false
        }
    })

    const { user } = useAuthWS()
    const { onlineUsers } = useSocketChat()
    const { selectUserChat, getToUser } = useChat()

</script>

<style scoped>

    aside {
        height: 100%;
    }

    ul{
        padding: 0;
    }

    li{
        display: flex;
        flex-direction: column;
        list-style: none;
        height: 70px;
        padding: 0;
        text-align: start;
        width: 100%;
        margin: 5px 0;

    }

    li > span {
        padding: 5px 0 0 15px;
    }

    
    .container-user-list{
        width: 25%;
    }

    .active{
        border: 1px solid #1DA072;
        border-radius: 5px;
        background: rgba(29, 160, 114, 0.65);
        backdrop-filter:  blur(8px);
    }


    @media screen and (max-width:768px) {
        .menu-hidden {
            position: fixed;
            left: -30%;
        } 

        .show{
            position: fixed;
            left: 0;
        }
        
        
    }
    
    
    
</style>