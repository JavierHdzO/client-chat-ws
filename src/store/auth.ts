import { defineStore } from "pinia"
import { api } from "../api"
import { User, CreateUser } from '../interfaces'

export const useAuthStore = defineStore('auth', {
    state: ()=>({
        user: null,
        isLoading: false,
        isAuthenticated: false
    }),

    getters: {
        getUser: (state) => state.user,
        getIsLoading: ( state ) => state.isLoading
    },

    actions:{

        async logIn({email, password}: User){
            try {
                this.isLoading = true
                const { data } =  await api.post('api/auth/signin',  {email, password})

                this.isLoading = false
                this.user = { ...data }

                if( !data.id ) {
                    localStorage.removeItem('access_token')
                    return false
                }

                localStorage.setItem('access_token', data.access_token)
                this.isAuthenticated = true
                return true;
            } catch (error) {
                console.log(error)
                localStorage.removeItem('access_token')
                this.isAuthenticated = false
            }
        },
        
        async register( {confirm_password, ...user}: CreateUser){
            try {
                this.isLoading = true
                const { data } = await api.post('api/auth/signup', user)
                this.isLoading = false
                localStorage.setItem('access_token', data.access_token)
                delete data['access_token']
                this.user = { ...data }
                this.isAuthenticated = true

            } catch (error) {
                this.user = null
                this.isLoading = false
                this.isAuthenticated = false
            }
        },

        logOut(){
            localStorage.removeItem('access_token')
            this.user = null
            this.isLoading = false
            this.isAuthenticated = false
        }
    }
})