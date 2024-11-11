import { Request, Response } from 'express';
import pedidos from '../../models/pedidos';

// Função para buscar os pedidos pendentes
export const cozinhaController = {
    async getPedidosCozinha(req: Request, res: Response) {
        try {
            // Buscando os pedidos com status "Em andamento"
            const pedidosEmAndamento = await pedidos.findAll({
                where: {
                    status_pedido: 'Em andamento',
                },
                attributes: [
                    'id_pedido',
                    'numero_mesa',
                    'obs_pedido',
                    'status_pedido',
                    'data_pedido',
                    'total_pedido',
                    'itens_pedido',
                ],
                order: [['data_pedido', 'ASC']],
            });

            if (pedidosEmAndamento.length > 0) {
                // Retorna os pedidos encontrados em formato JSON
                return res.json(pedidosEmAndamento);
            } else {
                // Se não houver pedidos, retorna uma resposta com status 404
                return res.status(404).json({ message: 'Nenhum pedido encontrado.' });
            }
        } catch (error) {
            console.error('Erro ao buscar pedidos: ', error);
            return res.status(500).json({ message: 'Erro ao buscar pedidos.' });
        }
    }
};
