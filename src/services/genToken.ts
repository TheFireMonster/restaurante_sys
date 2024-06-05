import jwt from 'jsonwebtoken';

export const generateToken = (id: number) => {
    const refreshToken = jwt.sign({ id }, process.env.SECRET_KEY ?? '', { expiresIn: process.env.REFRESH_EXPIRATION })
        return { refreshToken }
}