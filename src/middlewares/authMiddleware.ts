import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../helpers/apiErrors';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
        const token = req.cookies[process.env.REFRESH_COOKIE_NAME ?? ''];
        if (token) {
            jwt.verify(token, process.env.SECRET_KEY ?? '', (err: any, decoded: any) => {
                if (err) throw new UnauthorizedError('Invalid credentials');
                req.body.id = decoded.id_usuario;
                next();
            });
        } else {
            throw new UnauthorizedError('Invalid credentials');
        }

};