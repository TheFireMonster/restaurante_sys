import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../helpers/apiErrors';
import { generateToken } from '../services/genToken';

export const verifyAndRefreshToken = async (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.cookies[process.env.AUTH_COOKIE_NAME ?? ''];
    const refreshToken = req.cookies[process.env.REFRESH_COOKIE_NAME ?? ''];
    const secretKey = process.env.SECRET_KEY ?? '';

    if (!authToken && refreshToken) {
        jwt.verify(refreshToken, secretKey, (err: any, decoded: any) => {
            if (err) {
                return next(new UnauthorizedError('Invalid credentials'));
            }

            const { authToken: newAuthToken, refreshToken: newRefreshToken } = generateToken(decoded.id);
            
            res.cookie(process.env.AUTH_COOKIE_NAME ?? '', newAuthToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', 
                sameSite: 'strict'
            });
            res.cookie(process.env.REFRESH_COOKIE_NAME ?? '', newRefreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', 
                sameSite: 'strict'
            });

            req.body.id = decoded.id;
            req.body.role = decoded.role;
            next();
        });

    } else if (authToken) {
        jwt.verify(authToken, secretKey, (err: any, decoded: any) => {
            if (err) {
                return next(new UnauthorizedError('Invalid credentials'));
            }
            
            req.body.id = decoded.id;
            next();
        });

    } else {
        return next(new UnauthorizedError('Invalid credentials'));
    }
}
