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
    const { setToUser, addMessage  } = chatStore
    const { getToUser } = storeToRefs(chatStore)

    const { getUser } = storeToRefs(authStore)

    /** Reactive varaibles */
    const message = ref('')

    const selectUserChat = ( user: UserWS ) =>{

        setToUser({
            ...user,
            name: getUser.value.name
        })
        socket.emit('get-client-messages', {
            ...getToUser.value
        })

    }

    const emitMessageToServer = () => {
        if( message.value.trim().length <= 0 ) return 
        if( !getToUser.value.userId ) return

        const messageData: Message = {
            message:message.value,
            ...getToUser.value
        }

        socket.emit('message-from-client', {
            ...messageData
        })

        addMessage(messageData)
        message.value = ''
    }


    return {
        /**Variables */
        message,

        /**Computed */
        getMessages: computed( ()=> chatStore.getMessages),
        isMainUser: computed((  )=>( nameUser:string )=> nameUser === getUser.value.name ),
        getToUser: computed(() => chatStore.getToUser),

        /**Methods */
        emitMessageToServer,
        selectUserChat

    }
}

export default useChat