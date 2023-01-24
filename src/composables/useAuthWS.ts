import { computed, ref } from 'vue'
import { useAuthStore } from '../store/auth'
import Router from '../router'


export const useAuthWS = ( ) => {
    
    const store = useAuthStore()
    
    const { logIn, logOut, register, reload } = store

    // reactive variables need to auth

    const form = ref({
        email:'',
        password:'',
        confirm_password:'',
        fullName: ''
    })


    //methos for useAuthStore
    const signIn = async() => {

        const result =  await logIn( form.value )
        form.value = {
            email:'',
            password:'',
            confirm_password:'',
            fullName: ''
        }
        Router.push({name:"message-chat"})
        return result
    }

    const signUp =  async() => {

        if(form.value.email.trim().length <= 0) return
        if(form.value.password.trim().length <= 0) return
        if(form.value.confirm_password.trim().length <= 0) return
        if(form.value.password !== form.value.confirm_password ) return

        const result = await register( form.value )
        form.value = {
            email:'',
            password:'',
            confirm_password:'',
            fullName: ''
        }

        return result
    }

    const logout = () => {
        logOut()
    }

    const refresh = async() => {
        await reload()
    }


    return {
        form,
        signIn,
        signUp,
        logout,
        refresh,
        getAuth: computed( () => store.isAuthenticated )
    }
}


