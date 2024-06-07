import jwt from 'jsonwebtoken';

export const generateToken = (id: number) => {
    const authToken = jwt.sign({ id }, process.env.SECRET_KEY ?? '', { expiresIn: process.env.AUTH_EXPIRATION })

    const refreshToken = jwt.sign({ id }, process.env.SECRET_KEY ?? '', { expiresIn: process.env.REFRESH_EXPIRATION })
    
    return { refreshToken, authToken }
}

export const generateAdminToken = (id: number, role: string) => {
    const authTokenAdmin = jwt.sign({ id, role }, process.env.SECRET_KEY ?? '', { expiresIn: process.env.AUTH_EXPIRATION })

    const refreshTokenAdmin = jwt.sign({ id, role }, process.env.SECRET_KEY ?? '', { expiresIn: process.env.REFRESH_EXPIRATION })
    
    return { refreshTokenAdmin, authTokenAdmin }
}