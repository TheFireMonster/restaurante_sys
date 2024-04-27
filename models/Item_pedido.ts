import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/cnxsequelize';
import Pedido from './Pedido';
import Produto from './Produto';

interface ItemPedidoAttributes {
    id_item_pedido: number;
    id_pedido_item_pedido: number;
    quantidade_item_pedido: number;
    id_produto_item_pedido: number;
    valor_item_pedido?: number;
    total_item_pedido?: number;
}

class ItemPedido extends Model<ItemPedidoAttributes> implements ItemPedidoAttributes {
    public id_item_pedido!: number;
    public id_pedido_item_pedido!: number;
    public quantidade_item_pedido!: number;
    public id_produto_item_pedido!: number;
    public valor_item_pedido?: number;
    public total_item_pedido?: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

ItemPedido.init({
    id_item_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_pedido_item_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Pedido,
            key: 'id_pedido'
        }
    },
    quantidade_item_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_produto_item_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Produto,
            key: 'id_produto'
        }
    },
    valor_item_pedido: {
        type: DataTypes.DECIMAL(8, 2)
    },
    total_item_pedido: {
        type: DataTypes.DECIMAL(8, 2)
    }
}, {
    sequelize,
    modelName: 'ItemPedido',
    indexes: [
        {
            unique: true,
            fields: ['id_item_pedido']
        }
    ]
});

ItemPedido.belongsTo(Pedido, { foreignKey: 'id_pedido_item_pedido' });
Pedido.hasMany(ItemPedido, { foreignKey: 'id_pedido_item_pedido' });
ItemPedido.belongsTo(Produto, { foreignKey: 'id_produto_item_pedido' });
Produto.hasMany(ItemPedido, { foreignKey: 'id_produto_item_pedido' });

ItemPedido.sync();

export default ItemPedido;
