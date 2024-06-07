import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../helpers/apiErrors';
import { generateToken } from '../services/genToken';

export const verifyAndRefreshTokenAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.cookies[process.env.AUTH_COOKIE_NAME ?? ''];
    const refreshToken = req.cookies[process.env.REFRESH_COOKIE_NAME ?? ''];

    if (!authToken && refreshToken) {
        jwt.verify(refreshToken, process.env.SECRET_KEY ?? '', (err: any, decoded: any) => {
            if (err){
                return next(new UnauthorizedError('Invalid credentials'));
            }
            const { authToken: newAuthToken, refreshToken: newRefreshToken } = generateToken(decoded.id);
            res.cookie (process.env.AUTH_COOKIE_NAME ?? '', newAuthToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict'});
            res.cookie (process.env.REFRESH_COOKIE_NAME ?? '', newRefreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict'});
            req.body.id = decoded.id;
            next();
        });

    } else if (authToken) {
        jwt.verify(authToken, process.env.SECRET_KEY ?? '', (err: any, decoded: any) => {
            if (err){
                return next(new UnauthorizedError('Invalid credentials'));
            }
            req.body.id = decoded.id;
            next();
        })

    } else {
        return next(new UnauthorizedError('Invalid credentials'));
    }
}