import { Request, Response, NextFunction, response } from 'express';
import Pedido from '../../models/pedidos';


// Função para buscar os pedidos pendentes
async function getPedidosCozinha() {
    return {
        async getPedidosCozinha(req:Request, res:Response)
        // Busca os pedidos com seus itens e valores
        const pedidos = await Pedido.findAll({
            where: {
                status_pedido: 'Em andamento' // Apenas pedidos em andamento para a cozinha
            },
            include: [
                {
                    model: Pedido, // Supondo que você tenha um modelo de ItensPedidos relacionado
                    as: 'itens_pedido', // Relacionamento com os itens do pedido
                    attributes: ['nome_produto_item_pedido', 'quantidade_item_pedido', 'preco_item_pedido'] // Aqui estamos pegando o nome, quantidade e preço
                }
            ],
            attributes: ['id_pedido', 'numero_mesa', 'obs_pedido', 'data_pedido', 'status_pedido', 'total_pedido'], // Dados principais do pedido
            order: [['data_pedido', 'ASC']] // Organizar por hora de pedido
        });

        // Se os pedidos forem encontrados
        if (pedidos.length > 0) {
            return res.json(pedidos);
        }

        // Caso não haja pedidos
        res.status(404).json({ message: 'Nenhum pedido encontrado.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar pedidos.' });
    }
};
