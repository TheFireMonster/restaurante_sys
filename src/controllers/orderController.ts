import { Request, Response, NextFunction } from 'express';
import Pedido from '../../models/Pedido';
import { orderRepository } from '../repositories/orderRepository';
import { ConflictError } from '../helpers/apiErrors';

export class OrderController {
    async getRegOrder (req: Request, res: Response) {
        res.render('RegistrarPed');
    }
    async orderRegister(req: Request, res: Response, next: NextFunction) {
        const { ped_id_usuario, ped_numero_mesa } = req.body;
        try {
            const order = await orderRepository.findByTableNum(ped_numero_mesa)
            if (order){
                return next(new ConflictError('Order already exists'));
            }else{
                await Pedido.create({ id_mesa_pedido: ped_numero_mesa, id_usuario_pedido: ped_id_usuario });
                res.send("Pedido cadastrado com sucesso");
            }
        } catch (error) {
            console.error(error);
            res.send("Não foi possível finalizar o pedido");
        }
    }
    async orderEnd(req: Request, res: Response, next: NextFunction) {
        const orderId= req.params.orderId;
        try {
            
            const order = await Pedido.findByPk(orderId);
        
            if (order) {
            
             order.status_pedido == "Pedido Finalizado"; 
              await order.save();
        
              res.redirect('/'); 
            } else {
              res.status(404).send('Pedido não encontrado');
            }
          } catch (err) {
            console.error(err);
            res.status(500).send('Algo deu errado');
          }
        let redirectUrl = '/home';
        res.status(200).json({
            message: "Pedido Finalizado!",
            redirectUrl: redirectUrl
        });
    }
}