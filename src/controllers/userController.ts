import Usuario from '../../models/usuarios';
import { Request, Response } from 'express';

// Função assíncrona UserController
export async function UserController() {
    return {
        async register(req: Request, res: Response) {
            const { email, name, password } = req.body;

            try {
                console.log('Registrando novo usuário...');

                // const hashedPassword = await bcrypt.hash(password, 10);
                const hashedPassword = password;

                await Usuario.create({
                    senha_usuario: hashedPassword,
                    nome_usuario: name,
                    email_usuario: email,
                });

                const redirectUrl = '/login';

                res.redirect(redirectUrl);
                console.log('Usuário cadastrado com sucesso');
                console.log(`Redirecting to ${redirectUrl}`);
               
                  
               
            } catch (error) {
                console.error('Erro ao cadastrar usuário:', error);
                res.status(500).send("Não foi possível finalizar o cadastro");
            }
        }
    };
}
