import { ref, computed } from 'vue'
// import { Socket } from 'socket.io-client'
import { socket } from '../sockets'

const useSocketChat = ( ) => {
 
    // socket.connect()
    const statusSocket = ref<boolean>(false)
    const clients_on   = ref<string[]>([]) 
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

    socket.on('getOnlineClients', ( payload ) => {
        console.log({ payload }); 
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
        clients_on,
        submitForm,
        message
    }
}

export default useSocketChat