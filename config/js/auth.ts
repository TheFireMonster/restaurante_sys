import express, { Request, Response } from 'express';
import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import usuarios from '../../models/Usuario'

/// Estratégia Local para login
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'senha'
}, async (email: string, senha: string, done: Function) => {
    try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return done(null, false, { message: 'Email inválido' });
        }

        if (senha.length < 6) {
            return done(null, false, { message: 'Senha deve ter pelo menos 6 caracteres' });
        }

        // Use Sequelize para encontrar o usuário
        const user = await usuarios.findOne({ where: { email_usuario: email, senha_usuario: senha } });

        if (!user) {
            return done(null, false, { message: 'Credenciais inválidas' });
        }

        // Aqui, passamos o ID do usuário em vez do e-mail
        return done(null, user);
    } catch (error) {
        console.error('Erro ao consultar o banco de dados:', error);
        return done(error);
    }
}));

passport.serializeUser((user: any, done: Function) => {
    // Armazene o ID do usuário ao invés do email
    done(null, user.id_usuario);
});

passport.deserializeUser(async (id: number, done: Function) => {
    try {
        // Use Sequelize para encontrar o usuário pelo ID
        const user = await usuarios.findOne({ where: { id_usuario: id } });

        if (!user) {
            return done(new Error('Usuário não encontrado'));
        }

        // Retorna o usuário inteiro (ou apenas os dados necessários)
        return done(null, user);
    } catch (error) {
        console.error('Erro ao consultar o banco de dados:', error);
        return done(error);
    }
});

export default passport;
