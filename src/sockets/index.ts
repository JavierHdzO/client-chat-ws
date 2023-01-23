
import { Manager } from 'socket.io-client'

const host: string = import.meta.env.VITE_BE_HOST


export const connectToWSServer = ( jwt: string) => {
    
    const manager = new Manager(host, {
        autoConnect: true,
        extraHeaders:{
            authentication: `Bearer ${jwt.trim()}`
        }
    })
    const socket  = manager.socket('/')

    return socket
 }

