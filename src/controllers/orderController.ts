import { Request, Response, NextFunction } from 'express';
import Pedido from '../../models/pedidos';
import { ConflictError } from '../helpers/apiErrors';

export const OrderController = {
    // Método de instância para registrar o pedido
    async orderRegister(req: Request, res: Response) {
        // Verifica se o usuário está autenticado e acessa o ID do usuário
        const id_usuario_pedido = (req.user as any)?.id_usuario;

        if (!id_usuario_pedido) {
            return res.status(401).send('Usuário não autenticado');
        }

        const { numero_mesa, obs_pedido, total_pedido, itens_pedido } = req.body;

        try {
            // Verifica se já existe um pedido com o mesmo id do usuário e número da mesa
            const existingOrder = await Pedido.findOne({ where: { id_usuario_pedido, numero_mesa } });
            if (existingOrder) {
                return res.status(409).json({ error: 'Este pedido já existe para este usuário e mesa.' });
            }

            // Criação de um novo pedido com os itens como JSON
            const newOrder = await Pedido.create({
                id_usuario_pedido,
                numero_mesa,
                obs_pedido,
                total_pedido,
                status_pedido: 'Em andamento',
                data_pedido: new Date(),
                itens_pedido: itens_pedido,  // Armazena os itens como um JSON
            });

            // Retorna uma resposta com o novo pedido
            res.status(201).json({ message: 'Pedido cadastrado com sucesso', pedido: newOrder });
        } catch (error) {
            console.error('Erro ao cadastrar pedido:', error);
            res.status(500).send('Não foi possível finalizar o pedido');
        }
    }
};
