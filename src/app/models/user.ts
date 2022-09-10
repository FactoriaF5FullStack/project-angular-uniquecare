export interface User {
    token: string,
    expiresAt: string,
    type: string,
    id: number,
    username: string,
    email: string,
    role: string[]
}