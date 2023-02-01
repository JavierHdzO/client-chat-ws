import { ref } from 'vue'
import { storeToRefs } from "pinia"
import { socket } from "../sockets" 
import { useAuthStore } from "../store/auth"
import { useChatStore } from "../store/chat"

const useChat = () => {
    const authStore = useAuthStore()
    const chatStore = useChatStore()

    /** Store's variables */
    const { getToUser } = storeToRefs(chatStore)

    /** Reactive varaibles */
    const message = ref('')

    const emitMessageToServer = () => {
        if( message.value.trim().length <= 0 ) return 

        socket.emit('message-from-client', {
            message:message.value,
            ...getToUser.value
        })

        message.value = ''
    }

    return {
        /**Variables */
        message,

        /**Methods */
        emitMessageToServer

    }
}

export default useChat