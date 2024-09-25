import { Request, Response } from 'express';
import Produto from '../../models/Produto';

export class ProdController {
    async getRegProd(req: Request, res: Response) {
        res.render('RegistrarProd');
    }
    async prodRegister(req: Request, res: Response){
        const { nome_produto, descricao_produto, preco_produto, quantidade_produto, tipo_produto } = req.body;
        try {
            let produto_transformacao = true
            if (tipo_produto == 'Pizza') {
                produto_transformacao = true
            } else {
                produto_transformacao = false
            }
            await Produto.create({ nome_produto, descricao_produto, preco_produto, quantidade_produto, tipo_produto, produto_transformacao});
            res.render('RegistrarNovoProd');
        } catch (error) {
            console.error(error);
            res.send("Não foi possível finalizar o cadastro do produto");
        }
    }
}
