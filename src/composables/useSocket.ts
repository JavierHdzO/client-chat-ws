import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { UserWS } from '../interfaces/user.interface'
// import { Socket } from 'socket.io-client'
import { socket } from '../sockets'
import { useAuthStore } from '../store/auth'

const useSocketChat = ( ) => {

    //auth store
    const store = useAuthStore()

    const { getUser } = storeToRefs(store)
 
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

    socket.on('message-from-server', ( payload:{fullName?: string, message: string} ) => {
        console.log(payload);
    })

    //emit
    
    // method
    const submitForm = (  ) => {
        if( message.value.trim().length <= 0 ) return
        socket.emit('message-from-client', { message:message.value })
        message.value = ''
    }

    return {
        socket,
        isOnSocketClient: computed( () => statusSocket.value?'online':'offline'),
        onlineUsers: computed( () => connectedClients.value.filter( client => client.userId !== getUser.value.id)),
        connectedClients,
        submitForm,
        message
    }
}

export default useSocketChat