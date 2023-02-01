import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { UserWS } from '../interfaces/user.interface'
// import { Socket } from 'socket.io-client'
import { socket } from '../sockets'
import { useAuthStore } from '../store/auth'
import { useChatStore } from '../store/chat'

const useSocketChat = ( ) => {

    //auth store
    const authStore = useAuthStore()
    const chatStore =  useChatStore()

    const { getUser } = storeToRefs(authStore)
    const { getToUser } = storeToRefs(chatStore)
 
    // socket.connect()
    const statusSocket = ref<boolean>(false)
    const connectedClients   = ref<UserWS[]>([]) 
    const message = ref('')

    //listening

    socket.on('connect', () => {
        console.log('conectado');
        statusSocket.value = true
    })

    socket.on('disconnect', () => {
        console.log('desconectado');
        statusSocket.value = false
    })

    socket.on('getOnlineClients', ( clients ) => {
        connectedClients.value = clients
    });

    socket.on('message-from-server', ( payload ) => {
        console.log(payload);
        console.log("segunda");
    })

    //emit
    
    // methods
    // const submitForm = (  ) => {
    //     if( message.value.trim().length <= 0 ) return
    //     socket.emit('message-from-client', { message:message.value })
    //     message.value = ''
    // }

    const emitMessageToServer = () => {
        if( message.value.trim().length <= 0 ) return 

        socket.emit('message-from-client', {
            message:message.value,
            ...getToUser.value
        })

        message.value = ''
    }

    return {
        socket,
        isOnSocketClient: computed( () => statusSocket.value?'online':'offline'),
        onlineUsers: computed( () => connectedClients.value.filter( client => client.userId !== getUser.value.id)),
        connectedClients,
        message,
        /** Methods */
        emitMessageToServer
    }
}

export default useSocketChat