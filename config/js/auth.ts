import express, { Request, Response } from 'express';
import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import Usuario from '../../models/Usuario'
import bcrypt from 'bcrypt';



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
        const user = await Usuario.findOne({ where: { email_usuario:email , senha_usuario:senha} });

        if (!user) {
            return done(null, false, { message: 'Credenciais inválidas' });
        }


        return done(null, user);
    } catch (error) {
        console.error('Erro ao consultar o banco de dados:', error);
        return done(error);
    }
}));

passport.serializeUser((user: any, done: Function) => {
    done(null, user.email_usuario);
});

passport.deserializeUser(async (email: string, done: Function) => {
    try {
        // Use Sequelize para encontrar o usuário pelo email
        const user = await Usuario.findOne({ where: { email_usuario:email} });

        if (!user) {
            return done(new Error('Usuário não encontrado'));
        }

        return done(null, user);
    } catch (error) {
        console.error('Erro ao consultar o banco de dados:', error);
        return done(error);
    }

})

export default passport
function createHash(arg0: string) {
    throw new Error('Function not implemented.');
}

