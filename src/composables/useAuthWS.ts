import { ref } from 'vue'
import { Socket } from 'socket.io-client'

const useAuthWS = ( ) => {

    const jwt = ref<string>('')

    const form = ref<Object>({
        email:'',
        password:''
    })

    const signIn = async() => {

        const resp = await fetch('http://localhost:3000/api/auth/signin', {
            method:'POST',
            body: JSON.stringify(form.value),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const { access_token, email, fullName, id } = await resp.json()
        
        if( !access_token ) return

        localStorage.setItem('access_token', access_token)


    }



    



    return {
        form,
        signIn
    }
}


export default useAuthWS