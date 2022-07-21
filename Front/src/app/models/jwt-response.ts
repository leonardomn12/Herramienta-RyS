export interface JwtResponse {
    dataUser: {
        id: number,
        nombre: string,
        email: string,
        accessToken: string,
        expiresIn: string
    }
}