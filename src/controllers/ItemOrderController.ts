import { Request, Response } from 'express';
import Item_pedido from '../../models/Item_pedido';

export class ItemOrderController {
    async itemOrderRegister(req: Request, res: Response) {
        const { id_pedido_item_pedido, quantidade_item_pedido, id_produto_item_pedido, valor_item_pedido, total_item_pedido } = req.body;
        try {
            await Item_pedido.create({ id_pedido_item_pedido, quantidade_item_pedido, id_produto_item_pedido, valor_item_pedido, total_item_pedido });
            res.render('RegistrarNovoItemPed');
        } catch (error) {
            console.error(error);
            res.send("Não foi possível finalizar o cadastro do Item do pedido");
        }
    }
}