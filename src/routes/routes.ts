import express, { NextFunction, Request, Response, Router } from 'express';
import path from 'path';

import passport from '../../config/js/auth';
import Produto from '../../models/Produto';
import Pedido from '../../models/Pedido';
import { LoginController } from '../controllers/LoginController';
import { LogoutController } from '../controllers/LogoutController';
import { verifyAndRefreshTokenAdmin } from '../middlewares/verifyAndRefreshTokenAdmin';
import { verifyAndRefreshToken } from '../middlewares/verifyAndRefreshToken';
import { UserController } from '../controllers/userController';

const routes = express.Router();
// const loginController = new LoginController();
// const userController = new UserController();

// class MenuRoute {
//     static getMenu(req: Request, res: Response) {
//         res.send('Hello World');
//     }
// }

// class HomeRoute {
//     static getHome(req: Request, res: Response) {
//         res.render('home');
//     }
// }

// class SignupRoute {
//     static getSignup(req: Request, res: Response) {
//         res.render('Cadastro');
//     }
// }

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
            return res.redirect('/home');
        });
    })(req, res, next);
});
  


routes.get('/login', function (_req: Request, res: Response) {
    res.sendFile(path.join(__dirname + "../../../public/login.html"));
  });


  routes.get('/home', function (_req: Request, res: Response) {
    res.sendFile(path.join(__dirname + "../../../public/home.html"));
  });

  
// class RegProdRoute {
//     static getRegProd(req: Request, res: Response) {
//         res.render('RegistrarProd');
//     }

//     static async postRegProd(req: Request, res: Response) {
//         const { nome_produto, descricao_produto, preco_produto, quantidade_produto, tipo_produto, produto_transformacao } = req.body;
//         try {
//             await Produto.create({ nome_produto, descricao_produto, preco_produto, quantidade_produto, tipo_produto, produto_transformacao });
//             res.render('RegistrarNovoProd');
//         } catch (error) {
//             console.error(error);
//             res.send("Não foi possível finalizar o cadastro do produto");
//         }
//     }
// }

// class RegOrdRoute {
//     static getRegOrd(req: Request, res: Response) {
//         res.render('RegistrarPed');
//     }

//     static async postRegOrd(req: Request, res: Response) {
//         const { ped_id_usuario, ped_numero_mesa } = req.body;
//         try {
//             await Pedido.create({ id_mesa_pedido: ped_numero_mesa, id_usuario_pedido: ped_id_usuario });
//             res.send("Pedido cadastrado com sucesso");
//         } catch (error) {
//             console.error(error);
//             res.send("Não foi possível finalizar o pedido");
//         }
//     }
// }

// class Routes {
//     public router: Router;

//     constructor() {
//         this.router = Router();
//         this.initRoutes();
//     }

//     private initRoutes() {
//         const { getMenu } = MenuRoute;
//         const { getHome } = HomeRoute;
//         const { getSignup } = SignupRoute;
//         const { getRegProd, postRegProd } = RegProdRoute;
//         const { getRegOrd, postRegOrd } = RegOrdRoute;
//         const { getLogin } = LoginRoute;

//         this.router.get('/cardapio', getMenu);
//         this.router.get('/home', verifyAndRefreshToken || verifyAndRefreshTokenAdmin, getHome);
//         this.router.get('/cadastro', getSignup);
//         this.router.post('/cad-fim', (req, res) => userController.register(req, res));
//         this.router.get('/login', getLogin);
//         this.router.post('/login-fim', (req, res, next) => loginController.login(req, res, next));
//         this.router.post('/logout', verifyAndRefreshToken || verifyAndRefreshTokenAdmin, new LogoutController().logout);
//         this.router.get('/produtocad', verifyAndRefreshTokenAdmin, getRegProd);
//         this.router.post('/prod-fim', verifyAndRefreshTokenAdmin, postRegProd);
//         this.router.get('/pedidocad', verifyAndRefreshToken || verifyAndRefreshTokenAdmin, getRegOrd);
//         this.router.post('/ped-fim', verifyAndRefreshToken || verifyAndRefreshTokenAdmin, postRegOrd);
//     }
// }

export default routes
