import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import routes from './src/routes/routes';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import session from 'express-session';
import { sequelize } from './db/banco/old/config/cnxsequelize';
const LocalStrategy = require('passport-local').Strategy;

const app = express();

// Configurando o express-session
app.use(session({
    secret: 'seuSegredoAqui', // Use um segredo seguro em produção
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Defina como true se estiver usando HTTPS
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


app.use('/public', express.static('public'));


app.use(routes);

sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado!');
});

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
