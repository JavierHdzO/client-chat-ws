import { useAuthWS } from '../../composables/useAuthWS'

export const authGuard = async(to:any, from: any, next: any) => {
    const { refresh,getAuth } = useAuthWS()
    
    
    await refresh()

    if( !getAuth.value ) return next({name:'auth'})
    return next()
}
