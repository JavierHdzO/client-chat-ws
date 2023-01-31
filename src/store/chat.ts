import { defineStore } from 'pinia'

export const useChatStore =  defineStore('chat', {
    state: () => ({
        messages:[],
        toUser: {
            userId: '',
            socketId:''
        },
        userSelected: false

    }),

    getters:{
        getToUser: ( state ) => state.toUser,
        isUserSelected: ( state ) => state.userSelected
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
        }

    }
})