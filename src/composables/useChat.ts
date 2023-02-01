import { computed, ref } from 'vue'
import { storeToRefs } from "pinia"
import { socket } from "../sockets" 
import { useAuthStore } from "../store/auth"
import { useChatStore } from "../store/chat"
import { UserWS, Message } from '../interfaces'

const useChat = () => {
    const authStore = useAuthStore()
    const chatStore = useChatStore()

    /** Store's variables */
    const { setToUser  } = chatStore
    const { getToUser } = storeToRefs(chatStore)

    const { getUser } = storeToRefs(authStore)

    /** Reactive varaibles */
    const message = ref('')

    const selectUserChat = ( user: UserWS ) =>{

        setToUser(user)
        socket.emit('get-client-messages', {
            ...getToUser.value
        })

    }

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

        /**Computed */
        getMessages: computed( ()=> chatStore.getMessages),
        isMainUser: computed((  )=>( nameUser:string )=> nameUser === getUser.value.name ),

        /**Methods */
        emitMessageToServer,
        selectUserChat

    }
}

export default useChat