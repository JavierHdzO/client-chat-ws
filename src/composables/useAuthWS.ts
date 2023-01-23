import { computed, ref } from 'vue'
import { useAuthStore } from '../store/auth'



export const useAuthWS = ( ) => {
    
    const store = useAuthStore()
    
    const { logIn, logOut, register } = store

    // reactive variables need to auth

    const form = ref({
        email:'',
        password:'',
        confirm_password:'',
        fullName: ''
    })


    //methos for useAuthStore
    const signIn = () => {

        logIn( form.value )

    }

    const signUp = () => {

        if(form.value.email.trim().length <= 0) return
        if(form.value.password.trim().length <= 0) return
        if(form.value.confirm_password.trim().length <= 0) return
        if(form.value.password !== form.value.confirm_password ) return

        register( form.value )
        form.value = {
            email:'',
            password:'',
            confirm_password:'',
            fullName: ''
        }
    }


    return {
        form,
        signIn,
        signUp,
        getAuth: computed( () => store.getIsLoading )
    }
}


