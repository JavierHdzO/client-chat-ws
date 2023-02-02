import { defineStore } from 'pinia'
import { Message } from '../interfaces'

export const useChatStore =  defineStore('chat', {
    state: () => ({
        messages: [] as Message[] | undefined,
        toUser: {
            userId: '',
            socketId:'',
            name:''
        },
        userSelected: false,
        nofity: false

    }),

    getters:{
        getToUser: ( state ) => state.toUser,
        isUserSelected: ( state ) => state.userSelected,
        getMessages: ( state ) => state.messages
    },

    actions:{

        setToUser( { userId, socketId, name }: { userId: string, socketId: string, name: string } ){
            if(userId.trim().length < 0) return
            if(socketId.trim().length < 0) return

            this.toUser = {
                socketId,
                userId,
                name
            }
            this.userSelected = true
        },

        setMessages( messages: Message[] ){
            if(messages.length < 0 ) this.messages = []
            this.messages = messages;
        },

        addMessage( message: Message ){
            // console.log(message);
            // if(message.name.trim().length <= 0 || message.message.trim().length <= 0) return

            if( message.userId !== this.getToUser.userId ){
                 this.nofity = true
                 return
            }
            this.messages?.push(message);
        }

    }
})