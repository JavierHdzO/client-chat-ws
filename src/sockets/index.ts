
import { Manager } from 'socket.io-client'

const host: string = import.meta.env.VITE_BE_HOST



const jwt = localStorage.getItem('access_token') 
const manager = new Manager(host, {
        autoConnect: true,
        extraHeaders:{
            authentication: `${jwt?.trim()}`
        }
    })
export const socket  = manager.socket('/')


