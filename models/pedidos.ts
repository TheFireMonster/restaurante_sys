import { DataTypes, Model } from 'sequelize'; 
import { sequelize } from '../db/banco/old/config/cnxsequelize';
import Usuario from './usuarios';

interface PedidoAttributes {
    id_pedido?: number;
    id_usuario_pedido: number;
    numero_mesa?: number;
    qtd_produto?: number;
    obs_pedido?: string;
    status_pedido?: string;
    data_pedido?: Date;
    total_pedido?: number;
    itens_pedido?: any; // Campo para armazenar os itens como JSON
}

class pedidos extends Model<PedidoAttributes> implements PedidoAttributes {
class pedidos extends Model<PedidoAttributes> implements PedidoAttributes {
    public id_pedido!: number;
    public id_usuario_pedido!: number;
    public numero_mesa?: number;
    public qtd_produto: number;
    public obs_pedido?: string;
    public status_pedido?: string;
    public data_pedido?: Date;
    public total_pedido?: number;
    public itens_pedido?: any; // Definindo como JSON

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

pedidos.init({
pedidos.init({
    id_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    id_usuario_pedido: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    },
    numero_mesa: { 
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'id_mesa_pedido' 
    },
    qtd_produto: {
        type: DataTypes.INTEGER
    },
    obs_pedido: {
        type: DataTypes.STRING,
        validate: {
            len: [0, 150]
        }
    },
    status_pedido: {
        type: DataTypes.STRING,
        defaultValue: 'Em andamento'
    },
    data_pedido: {
        type: DataTypes.DATE
    },
    total_pedido: {
        type: DataTypes.DECIMAL(8, 2)
    },
    itens_pedido: { 
        type: DataTypes.JSONB,  
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'pedidos',
    indexes: [
        {
            unique: true,
            fields: ['id_pedido']
        }
    ]
});

// Relacionamento com o usuário
pedidos.belongsTo(Usuario, { foreignKey: 'id_usuario_pedido' });
Usuario.hasMany(pedidos, { foreignKey: 'id_usuario_pedido' });

export default pedidos;
export default pedidos;
