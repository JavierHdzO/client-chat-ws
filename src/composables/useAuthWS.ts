import { computed, ref } from 'vue'
import { useAuthStore } from '../store/auth'
import Router from '../router'


const useAuthWS = ( ) => {
    
    const store = useAuthStore()
    
    const { logIn, logOut, register, reload } = store

    
    // reactive variables need to auth
    const form = ref({
        email:'',
        password:'',
        confirm_password:'',
        name: ''
    })


    //methos for useAuthStore
    const signIn = async() => {

        const result =  await logIn( form.value )
        form.value = {
            email:'',
            password:'',
            confirm_password:'',
            name: ''
        }
        Router.push({name:"message-chat"})
        return result
    }

    const signUp =  async() => {
        if(form.value.name.trim().length <= 0 ) return
        if(form.value.email.trim().length <= 0) return
        if(form.value.password.trim().length <= 0) return
        if(form.value.confirm_password.trim().length <= 0) return
        if(form.value.password !== form.value.confirm_password ) return

        const result = await register( form.value )
        form.value = {
            email:'',
            password:'',
            confirm_password:'',
            name: ''
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
        getAuth: computed( () => store.isAuthenticated ),
        user: computed(() => store.getUser)
    }
}

export default useAuthWS


