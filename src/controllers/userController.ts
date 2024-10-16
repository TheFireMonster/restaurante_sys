//import bcrypt from 'bcrypt';
import Usuario from '../../models/Usuario';
import { Request, Response } from 'express';

export class UserController {
    async getRegister (req: Request, res: Response){
        res.render('Cadastro');
    }
    async register(req: Request, res: Response) {
        const { email, name, password, phone, cpf } = req.body;
        
        try {
            console.log('Registrando novo usuário...');

            //const hashedPassword = await bcrypt.hash(password, 10);
            const hashedPassword = password;
            
            await Usuario.create({
                senha_usuario: hashedPassword,
                nome_usuario: name,
                cpf_usuario: cpf,
                telefone_usuario: phone,
                email_usuario: email,
            });

            let redirectUrl = '/home';

            console.log('Usuário cadastrado com sucesso');
            console.log(`Redirecting to ${redirectUrl}`);
            res.status(200).json({
                message: "Login bem-sucedido!",
                redirectUrl: redirectUrl
            });
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            res.send("Não foi possível finalizar o cadastro");
        }
    }
}
