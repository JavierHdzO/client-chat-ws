import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { UserWS } from '../interfaces/user.interface'
// import { Socket } from 'socket.io-client'
import { socket } from '../sockets'
import { useAuthStore } from '../store/auth'
import { useChatStore } from '../store/chat'
import { Message } from '../interfaces'


const useSocketChat = ( ) => {

    //auth store
    const authStore = useAuthStore()
    const chatStore =  useChatStore()

    const { getUser } = storeToRefs(authStore)
    const { setMessages, addMessage } = chatStore
    
 
    // socket.connect()
    const statusSocket = ref<boolean>(false)
    const connectedClients   = ref<UserWS[]>([]) 

    socket.on('connect', () => {
        console.log('conectado');
        statusSocket.value = true
    })

    socket.on('disconnect', () => {
        console.log('desconectado');
        statusSocket.value = false
    })

    socket.on('getOnlineClients', ( clients ) => {
        // console.log(clients);
        connectedClients.value = clients
    })

    socket.on('message-from-server', ( message:Message ) => {
        addMessage( message )
    })


    socket.on('send-client-messages', ( { messages } ) => {
        setMessages(messages)
    })

    

    return {
        socket,
        isOnSocketClient: computed( () => statusSocket.value?'online':'offline'),
        onlineUsers: computed( () => connectedClients.value.filter( client => client.userId !== getUser.value.id)),
        connectedClients
        /** Methods */
    }
}

export default useSocketChat