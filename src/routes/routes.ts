import express, { Request, Response } from 'express';
import Usuario from './../../models/Usuario';
import Produto from './../../models/Produto';
import Pedido from './../../models/Pedido';

class MenuRoute {
    static getMenu(req: Request, res: Response) {
        res.send('Hello World'); //vai ser adicionado em breve
    }
}

class HomeRoute {
    static getHome(req: Request, res: Response) {
        res.render('./../../views/home');
    }
}

class HelpRoute {
    static getHelp(req: Request, res: Response) {
        //vai ser adicionado em breve
    }
}

class ContactRoute {
    static getContact(req: Request, res: Response) {
        //vai ser adicionado em breve
    }
}

class LoginRoute {
    static getLogin(req: Request, res: Response) {
        res.render('./../../views/login');
    }
}

class SignupRoute {
    static getSignup(req: Request, res: Response) {
        res.render('./../../views/Cadastro');
    }

    static postSignup(req: Request, res: Response) {
        const email = req.body.email;
        const nome = req.body.nome;
        const senha = req.body.senha;
        const telefone = req.body.fone;
        const cpf = req.body.cpf;
        Usuario.create({ senha_usuario: senha, nome_usuario: nome, cpf_usuario: cpf, telefone_usuario: telefone, email_usuario: email }).then(function () {
            res.send("Usuário cadastrado com sucesso");
        }).catch(function (erro) {
            console.error(erro);
            res.send("Não foi possível finalizar o cadastro");
        });
    }
}

class RegProdRoute {
    static getRegProd(req: Request, res: Response) {
        res.render('./../../views/RegistrarProd');
    }

    static postRegProd(req: Request, res: Response) {
        const nome_prod = req.body.nome_produto;
        const desc_prod = req.body.descricao_produto;
        const preco_prod = req.body.preco_produto;
        const quant_prod = req.body.quantidade_produto;
        const tipo_prod = req.body.tipo_produto;
        const trans_prod = req.body.produto_transformacao;
        Produto.create({ nome_produto: nome_prod, descricao_produto: desc_prod, preco_produto: preco_prod, quantidade_produto: quant_prod, tipo_produto: tipo_prod, produto_transformacao: trans_prod }).then(function () {
            res.render('./../../views/RegistrarNovoProd');
        }).catch(function (erro) {
            console.error(erro);
            res.send("Não foi possível finalizar o cadastro do produto");
        });
    }
}

class RegOrdRoute {
    static getRegOrd(req: Request, res: Response) {
        res.render('./../../views/RegistrarPed');
    }

    static postRegOrd(req: Request, res: Response) {
      const ped_id_usuario = req.body.ped_id_usuario;
      const ped_numero_mesa = req.body.ped_numero_mesa;
      Pedido.create({id_mesa_pedido: ped_numero_mesa, id_usuario_pedido: ped_id_usuario }).then(function () {
          res.send("Pedido cadastrado com sucesso");
      }).catch(function (erro) {
          res.send("Não foi possível finalizar o pedido");
      });
  }
}

class Routes {
    public routes: express.Router;

    constructor() {
        this.routes = express.Router();
        this.initRoutes();
    }

    initRoutes() {
        this.routes.get('/cardapio', MenuRoute.getMenu);
        this.routes.get('/home', HomeRoute.getHome);
        this.routes.get('/ajuda', HelpRoute.getHelp);
        this.routes.get('/contato', ContactRoute.getContact);
        this.routes.get('/login', LoginRoute.getLogin);
        this.routes.get('/cadastro', SignupRoute.getSignup);
        this.routes.post('/cad-fim', SignupRoute.postSignup);
        this.routes.get('/produtocad', RegProdRoute.getRegProd);
        this.routes.post('/prod-fim', RegProdRoute.postRegProd);
        this.routes.get('/pedidocad', RegOrdRoute.getRegOrd);
        this.routes.post('/ped-fim', RegOrdRoute.postRegOrd);
    }
}

export = new Routes().routes;
