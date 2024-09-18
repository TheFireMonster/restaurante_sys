import Pedido from '../../models/Pedido';

export const orderRepository = {
    findByTableNum: async (id: number) => {
        return await Pedido.findOne({
            where: {
                id_mesa_pedido: id
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
