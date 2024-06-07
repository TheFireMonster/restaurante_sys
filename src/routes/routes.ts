import express, { Request, Response, Router } from 'express';
import Usuario from '../../models/Usuario';
import Produto from '../../models/Produto';
import Pedido from '../../models/Pedido';
import { LoginController } from '../controllers/LoginController';
import { LogoutController } from '../controllers/LogoutController';
import { verifyAndRefreshTokenAdmin } from '../middlewares/verifyAndRefreshTokenAdmin';
import { verifyAndRefreshToken } from '../middlewares/verifyAndRefreshToken';

class MenuRoute {
    static getMenu(req: Request, res: Response) {
        res.send('Hello World'); 
    }
}

class HomeRoute {
    static getHome(req: Request, res: Response) {
        res.render('home');
    }
}

class SignupRoute {
    static getSignup(req: Request, res: Response) {
        res.render('Cadastro');
    }
    
    static async postSignup(req: Request, res: Response) {
        const { email, name, password, phone, cpf } = req.body;
        try {
            await Usuario.create({ senha_usuario: password, nome_usuario: name, cpf_usuario: cpf, telefone_usuario: phone, email_usuario: email });
            res.send("Usuário cadastrado com sucesso");
        } catch (error) {
            console.error(error);
            res.send("Não foi possível finalizar o cadastro");
        }
    }
}

class LoginRoute {
    static getLogin(req: Request, res: Response) {
        res.render('Login');
    }    
}

class RegProdRoute {
    static getRegProd(req: Request, res: Response) {
        res.render('RegistrarProd');
    }

    static async postRegProd(req: Request, res: Response) {
        const { nome_produto, descricao_produto, preco_produto, quantidade_produto, tipo_produto, produto_transformacao } = req.body;
        try {
            await Produto.create({ nome_produto, descricao_produto, preco_produto, quantidade_produto, tipo_produto, produto_transformacao });
            res.render('RegistrarNovoProd');
        } catch (error) {
            console.error(error);
            res.send("Não foi possível finalizar o cadastro do produto");
        }
    }
}

class RegOrdRoute {
    static getRegOrd(req: Request, res: Response) {
        res.render('RegistrarPed');
    }

    static async postRegOrd(req: Request, res: Response) {
        const { ped_id_usuario, ped_numero_mesa } = req.body;
        try {
            await Pedido.create({ id_mesa_pedido: ped_numero_mesa, id_usuario_pedido: ped_id_usuario });
            res.send("Pedido cadastrado com sucesso");
        } catch (error) {
            console.error(error);
            res.send("Não foi possível finalizar o pedido");
        }
    }
}

class Routes {
    public router: Router;

    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }

    private initRoutes() {
        const { getMenu } = MenuRoute;
        const { getHome } = HomeRoute;
        const { getSignup, postSignup } = SignupRoute;
        const { getRegProd, postRegProd } = RegProdRoute;
        const { getRegOrd, postRegOrd } = RegOrdRoute;
        const { getLogin } = LoginRoute;

        this.router.get('/cardapio', getMenu);
        this.router.get('/home', getHome);
        this.router.get('/cadastro', getSignup);
        this.router.get('/login', getLogin)
        this.router.post('/login-fim', new LoginController().login);

        this.router.post('/logout', verifyAndRefreshToken || verifyAndRefreshTokenAdmin, new LogoutController().logout);
        this.router.post('/cad-fim', postSignup);

        this.router.get('/produtocad', verifyAndRefreshTokenAdmin, getRegProd);
        this.router.post('/prod-fim', verifyAndRefreshTokenAdmin, postRegProd);

        this.router.get('/pedidocad', verifyAndRefreshToken || verifyAndRefreshTokenAdmin, getRegOrd);
        this.router.post('/ped-fim', verifyAndRefreshToken || verifyAndRefreshTokenAdmin, postRegOrd);
    }
}

export = new Routes().router;
