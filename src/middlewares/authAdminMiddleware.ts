import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../helpers/apiErrors';
import { generateAdminToken } from '../services/genToken';

export const authAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.cookies[process.env.AUTH_COOKIE_NAME ?? ''];
    const refreshToken = req.cookies[process.env.REFRESH_COOKIE_NAME ?? ''];

    if (!authToken && refreshToken) {
        jwt.verify(authToken, process.env.SECRET_KEY ?? '', (err: any, decoded: any) => {
            if (err){
                return next(new UnauthorizedError('Invalid credentials'));
            }
            if (decoded.role !== 'gerente'){
                return next(new UnauthorizedError('Invalid credentials'));
            }
            const { authTokenAdmin: newAuthTokenAdmin, refreshTokenAdmin: newRefreshTokenAdmin } = generateAdminToken(decoded.id, decoded.role);
            res.cookie (process.env.AUTH_COOKIE_NAME ?? '', newAuthTokenAdmin, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict'});
            res.cookie (process.env.REFRESH_COOKIE_NAME ?? '', newRefreshTokenAdmin, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict'});
            req.body.id = decoded.id;
            req.body.role = decoded.role;
            next();
        });

    } else if (authToken) {
        jwt.verify(authToken, process.env.SECRET_KEY ?? '', (err: any, decoded: any) => {
            if (err){
                return next(new UnauthorizedError('Invalid credentials'));
            }
            if (decoded.role !== 'gerente'){
                return next(new UnauthorizedError('Invalid credentials'));
            }
            req.body.id = decoded.id;
            req.body.role = decoded.role;
            next();
        })

    } else {
        return next(new UnauthorizedError('Invalid credentials'));
    }
}