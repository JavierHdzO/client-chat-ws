export interface User {
    email: string,
    password: string
}

export interface CreateUser {
    fullName: string,
    email: string,
    password: string,
    confirm_password: string
}
