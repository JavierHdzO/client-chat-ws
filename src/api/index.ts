
import axios from 'axios'

const host: string = import.meta.env.VITE_BE_HOST

export const api =  axios.create({
    baseURL: host,
    headers:{
        'Content-Type': 'application/json'
    }
})
