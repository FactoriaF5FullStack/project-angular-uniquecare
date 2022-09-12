export interface User {
    id: number,
    username: string,
    email: string,
    role: string[]
    token: string,
    expiresAt: string,
    type: string,
}