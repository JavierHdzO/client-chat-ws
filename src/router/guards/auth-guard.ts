import { useAuthWS } from '../../composables/useAuthWS'


export const authGuard = (to:any, from: any, next: any) => {

    const { getAuth } = useAuthWS()
    if( !getAuth.value ) next({name:'auth'})

    next()
}
