import Pedido from '../../models/Produto';

export const orderRepository = {
    findById: async (id: number) => {
        return await Pedido.findOne({
            where: {
                id_pedido: id
            },
            attributes: [
                'id_pedido', 
                'id_usuario_pedido', 
                'descricao_produto', 
                'id_mesa_pedido', 
                'status_pedido', 
                'data_pedido', 
                'total_pedido',
                'createdAt',
                'updatedAt'
            ]
        });
    }
};
