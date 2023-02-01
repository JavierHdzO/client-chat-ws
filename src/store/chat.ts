import { defineStore } from 'pinia'
import { Message } from '../interfaces'

export const useChatStore =  defineStore('chat', {
    state: () => ({
        messages: [] as Message[] | undefined,
        toUser: {
            userId: '',
            socketId:''
        },
        userSelected: false

    }),

    getters:{
        getToUser: ( state ) => state.toUser,
        isUserSelected: ( state ) => state.userSelected,
        getMessages: ( state ) => state.messages
    },

    actions:{

        setToUser( { userId, socketId }: { userId: string, socketId: string } ){
            if(userId.trim().length < 0) return
            if(socketId.trim().length < 0) return

            this.toUser = {
                socketId,
                userId
            }
            this.userSelected = true
        },

        setMessages( messages: Message[] ){
            if(messages.length < 0 ) this.messages = []
            this.messages = messages;
        }

    }
})