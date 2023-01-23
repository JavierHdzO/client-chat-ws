import { ref, computed } from 'vue'
import { Socket } from 'socket.io-client'
import {  connectToWSServer } from "../sockets"

const useSocketChat = ( ) => {

    let socket: Socket | undefined ;
    
    // socket.connect()
    const statusSocket = ref<boolean>(false)
    const clients_id   = ref<string[]>([]) 
    const message = ref('')
    const jwt = ref<string>('')

    //listening

    socket?.on('connect', () => {
        console.log('conectado');
        statusSocket.value = true
    })

    socket?.on('disconnect', () => {
        console.log('desconectado');
        statusSocket.value = false
    })

    socket?.on('getOnlineClients', ( payload:{ clients: string[]} ) => {
        const { clients } = payload
        clients_id.value = clients
    });

    socket?.on('message-from-server', ( payload:{fullName?: string, message: string} ) => {
        console.log(payload);
    })

    //emit
    
    // method
    const submitForm = (  ) => {
        if( message.value.trim().length <= 0 ) return
        socket?.emit('message-from-client', { message:message.value })
        message.value = ''
    }

    const connectWS = ( ) => {
        console.log(jwt.value);
        socket = connectToWSServer(jwt.value)
    }
    
    return {
        socket,
        isOnSocketClient: computed( () => statusSocket.value?'online':'offline'),
        clients_id,
        submitForm,
        message,
        connectWS,
        jwt
    }
}

export default useSocketChat