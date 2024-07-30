import { Request, Response } from 'express';
import Produto from '../../models/Produto';

export class ProdController {
    async prodRegister(req: Request, res: Response){
        const { nome_produto, descricao_produto, preco_produto, quantidade_produto, tipo_produto } = req.body;
        try {
            await Produto.create({ nome_produto, descricao_produto, preco_produto, quantidade_produto, tipo_produto});
            res.render('RegistrarNovoProd');
        } catch (error) {
            console.error(error);
            res.send("Não foi possível finalizar o cadastro do produto");
        }
    }
}
