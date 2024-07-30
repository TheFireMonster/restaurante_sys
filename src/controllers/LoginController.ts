import { Request, Response, NextFunction } from 'express';
import { userRepository } from '../repositories/userRepository';
import { UnauthorizedError } from '../helpers/apiErrors';
import { generateToken, generateAdminToken } from '../services/genToken';
import bcrypt from 'bcrypt';

export class LoginController {
    async login(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body;

        try {
            const user = await userRepository.findByEmail(email);

            if (!user) {
                console.log('User not found');
                return next(new UnauthorizedError('Invalid credentials'));
            }

            console.log('User found, verifying password...');

            const verifyPass = await bcrypt.compare(password, user.senha_usuario);

            if (!verifyPass) {
                console.log('Password verification failed');
                return next(new UnauthorizedError('Invalid credentials'));
            }

            console.log('Password verified, generating tokens...');

            let redirectUrl = '/pedidocad';

            if (user.tipo_usuario === 'gerente') {
                const { authTokenAdmin, refreshTokenAdmin } = generateAdminToken(user.id_usuario, user.tipo_usuario);

                res.cookie(process.env.AUTH_COOKIE_NAME ?? '', authTokenAdmin, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                });
                res.cookie(process.env.REFRESH_COOKIE_NAME ?? '', refreshTokenAdmin, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                });

                redirectUrl = '/produtocad';
            } else {
                const { authToken, refreshToken } = generateToken(user.id_usuario);

                res.cookie(process.env.AUTH_COOKIE_NAME ?? '', authToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                });
                res.cookie(process.env.REFRESH_COOKIE_NAME ?? '', refreshToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                });

                redirectUrl = '/pedidocad';
            }

            console.log(`Redirecting to ${redirectUrl}`);
            res.status(200).json({
                message: "Login bem-sucedido!",
                redirectUrl: redirectUrl
            });
        } catch (error) {
            console.error('Error during login:', error);
            return next(new UnauthorizedError('An error occurred during login'));
        }
    }
}