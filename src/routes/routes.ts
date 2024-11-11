import express, { NextFunction, Request, Response, Router } from 'express';
import path from 'path';
import multer from 'multer';
import pedidos from '../../models/pedidos';
import passport from '../../config/js/auth';
import Produto from '../../models/Produto';
import Pedido from '../../models/pedidos';
import session from 'express-session';
// import '../../config/types/express-session';
import { UserController } from '../controllers/userController';
import { OrderController } from '../controllers/orderController';
const routes = express.Router();



declare module 'express-session' {
    interface SessionData {
      mensagem?: string;  // Define a propriedade 'mensagem' como opcional
    }
  }
  

// Configuração do Multer para salvar as imagens em uma pasta "uploads"
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Caminho onde as imagens serão salvas
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Nomeia o arquivo com a data e nome original
    }
});


const upload = multer({ dest: 'uploads/' });







routes.get('/login', function (_req: Request, res: Response) {
    res.sendFile(path.join(__dirname + "../../../public/login.html"));
});




routes.post('/login', function (req: Request, res: Response, next: NextFunction) {
    passport.authenticate('local', function (err: any, user: { email_usuario: string; }, info: { message: string | number | boolean; }) {
        if (err) {
            return next(err);
        }
        if (!user) {
            // Se não houver usuário, redirecione para a página de login com uma mensagem de erro
            return res.redirect('/login?error=' + encodeURIComponent(info.message));
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            // Redireciona para a página inicial
            return res.redirect('/pedidos');
        });
    })(req, res, next);
});



routes.get('/home', function (_req: Request, res: Response) {
    res.sendFile(path.join(__dirname + "../../../public/home.html"));
});



routes.get('/pedidos', async (req,res) => {
    if (req.query.json === 'true') {
    try {
        const cardapioProdutos = await Produto.findAll(); // Busca todos os produtos no banco
        console.log(cardapioProdutos)
        res.json(cardapioProdutos); // Retorna JSON
        
      } catch (error) {
        console.log('Erro ao buscar produtos', error)
        res.status(500).json({ error: 'Erro ao buscar os produtos.' });
      }
    }else{
        res.sendFile(path.join(__dirname + "../../../public/pedidos.html"));
      }
      
    });

   

    routes.post('/pedidos', OrderController.orderRegister);
    
  




  routes.post('/cad-produtos', upload.single('imagem'), async (req: Request, res: Response) => {
    const { nome_produto, descricao_produto, preco_produto, quantidade_produto, idcategoria } = req.body;

    try {
        const novoProduto = await Produto.create({
            nome_produto,
            descricao_produto,
            preco_produto,
            tipo_produto: idcategoria, // Use o id da categoria conforme seu modelo e necessidade
            produto_transformacao: false, // Defina um valor padrão ou ajuste conforme necessário
            imagem_produto: req.file ? req.file.path : null
        })
        ;

        res.redirect('/pedidos?mensagem=Produto cadastrado com sucesso!');
    } catch (error) {
        console.error('Erro ao cadastrar o produto:', error);
        res.status(500).json({ error: 'Erro ao cadastrar o produto' });
    }
});


routes.get('/cad-usuarios', function (_req: Request, res: Response) {
    res.sendFile(path.join(__dirname + "../../../public/cad_usuarios.html"));
});


// Rota para processar o cadastro
(async () => {
    const userController = await UserController();  // Obtendo os métodos de UserController

    routes.post('/cad-usuarios', (req: Request, res: Response) => 
        userController.register(req, res)
    );
})();



export default routes
