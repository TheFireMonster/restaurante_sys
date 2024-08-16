import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import routes from './src/routes/routes';
import cookieParser from 'cookie-parser';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/public', express.static('public'));

app.use(routes);

app.get('/', (req: Request, res: Response) => {
    res.redirect('/login');
});

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
