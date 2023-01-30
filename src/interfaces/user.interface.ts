export interface User {
    email: string,
    password: string
}

export interface CreateUser {
    name: string,
    email: string,
    password: string,
    confirm_password: string
}

export interface UserWS {
    email?: string,
    name: string,
    userId:string,
    socketId: string
}
