import { Request, Response } from 'express';
import Pedido from '../../models/Pedido';
import { orderRepository } from '../repositories/orderRepository';

export class OrderController {
    async orderRegister(req: Request, res: Response) {
        const { ped_id_usuario, ped_numero_mesa } = req.body;
        try {
            const order = await orderRepository.findById(ped_numero_mesa)
            await Pedido.create({ id_mesa_pedido: ped_numero_mesa, id_usuario_pedido: ped_id_usuario });
            res.send("Pedido cadastrado com sucesso");
        } catch (error) {
            console.error(error);
            res.send("Não foi possível finalizar o pedido");
        }
    }
}