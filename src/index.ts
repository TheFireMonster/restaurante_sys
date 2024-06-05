import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import routes from './routes/routes';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.use(routes);

app.get('/', (req: Request, res: Response) => {
    res.redirect('/home');
});

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
