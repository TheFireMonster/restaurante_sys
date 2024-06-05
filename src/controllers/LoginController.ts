import { Request, Response } from 'express';
import { userRepository } from '../repositories/userRepository';
import { BadRequestError, UnauthorizedError } from '../helpers/apiErrors';
import { generateToken } from '../services/genToken';
import bcrypt from 'bcrypt';

//interface UserLogin {
    //id_usuario: number;
    //email_usuario: string;

//}

export class LoginController {
    async login(req: Request, res: Response) {
        const { email, password } = req.body

        const user = await userRepository.findByEmail(email)

        if (!user) {
            throw new UnauthorizedError('Invalid credentials');
        }

        const verifyPass = await bcrypt.compare(password, user.senha_usuario)

        if (!verifyPass) {
            throw new UnauthorizedError('Invalid credentials');
        }

        const { refreshToken } = generateToken(user.id_usuario);

        res.cookie (process.env.REFRESH_COOKIE_NAME ?? '', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict'});
        
        res.redirect('/produtocad')

        //const userLogin: UserLogin = { id_usuario: user.id_usuario, email_usuario: user.email_usuario }
        
        //return res.json({ message:'Login successful', userLogin, token: refreshToken});
    }


    async getProfile(req: Request, res: Response){
        const { authorization } = req.headers
        
        if (!authorization) {
            throw new UnauthorizedError('Não autorizado')
        }

        console.log(authorization)
    }
}
