import jwt from 'jsonwebtoken';

export const generateToken = (id: number) => {
    const secretKey = process.env.SECRET_KEY ?? '';
    const authExpiration = process.env.AUTH_EXPIRATION ?? '1h';
    const refreshExpiration = process.env.REFRESH_EXPIRATION ?? '7d';

    const authToken = jwt.sign({ id }, secretKey, { expiresIn: authExpiration });
    const refreshToken = jwt.sign({ id }, secretKey, { expiresIn: refreshExpiration });
    
    return { refreshToken, authToken };
}

export const generateAdminToken = (id: number, role: string) => {
    const secretKey = process.env.SECRET_KEY ?? '';
    const authExpiration = process.env.AUTH_EXPIRATION ?? '1h';
    const refreshExpiration = process.env.REFRESH_EXPIRATION ?? '7d';

    const authTokenAdmin = jwt.sign({ id, role }, secretKey, { expiresIn: authExpiration });
    const refreshTokenAdmin = jwt.sign({ id, role }, secretKey, { expiresIn: refreshExpiration });
    
    return { refreshTokenAdmin, authTokenAdmin };
}
