import { Request, Response, NextFunction } from 'express';
import { userRepository } from '../repositories/userRepository';
import { UnauthorizedError } from '../helpers/apiErrors';
import { generateToken, generateAdminToken } from '../services/genToken';
import bcrypt from 'bcrypt';

export class LoginController {
    async login(req: Request, res: Response, next:NextFunction) {
        const { email, password } = req.body

        const user = await userRepository.findByEmail(email)

        if (!user) {
            return next(new UnauthorizedError('Invalid credentials'));
        }

        const verifyPass = await bcrypt.compare(password, user.senha_usuario)

        if (!verifyPass) {
            return next(new UnauthorizedError('Invalid credentials'));
        }
    

        if (user.tipo_usuario === 'gerente'){
            const { authTokenAdmin } = generateAdminToken(user.id_usuario, user.tipo_usuario);
            res.cookie (process.env.AUTH_COOKIE_NAME ?? '', authTokenAdmin, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict'});

            const { refreshTokenAdmin } = generateAdminToken(user.id_usuario, user.tipo_usuario);
            res.cookie (process.env.REFRESH_COOKIE_NAME ?? '', refreshTokenAdmin, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict'});
            
            res.redirect('/produtocad')
        }

        else{
            const { authToken } = generateToken(user.id_usuario);
            res.cookie (process.env.AUTH_COOKIE_NAME ?? '', authToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict'});

            const { refreshToken } = generateToken(user.id_usuario);
            res.cookie (process.env.REFRESH_COOKIE_NAME ?? '', refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict'});
            
            res.redirect('/pedidocad')
        }
    }
}
