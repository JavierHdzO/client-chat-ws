<template>
    <div class="container-user-list">
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
                    >
                    {{user.name}}
                    <span><StatusIcon :connected="false" /> Connected</span>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script setup lang="ts">
    import StatusIcon from '../components/StatusIcon.vue'
    import  useAuthWS  from '../composables/useAuthWS'
    import useSocketChat from '../composables/useSocket'
    import useChat from '../composables/useChat'
    import { useChatStore } from '../store/chat'

    const { user } = useAuthWS()
    const { onlineUsers } = useSocketChat()
    const { selectUserChat } = useChat()
    // const store = useChatStore()

    // const { setToUser } = store

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

    }

    
    .container-user-list{
        width: 30%;
    }

    
</style>