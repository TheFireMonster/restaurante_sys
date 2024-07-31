import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/cnxsequelize'; 
import Usuario from './Usuario'; 
import Mesa from './Mesa'; 

interface PedidoAttributes {
    id_pedido?: number;
    id_usuario_pedido: number;
    id_mesa_pedido: number;
    obs_pedido?: string;
    status_pedido?: string;
    data_pedido?: Date;
    total_pedido?: number;
}

class Pedido extends Model<PedidoAttributes> implements PedidoAttributes {
    public id_pedido!: number;
    public id_usuario_pedido!: number;
    public id_mesa_pedido!: number;
    public obs_pedido?: string;
    public status_pedido?: string;
    public data_pedido?: Date;
    public total_pedido?: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Pedido.init({
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
    id_mesa_pedido: {
        type: DataTypes.INTEGER,
        references: {
            model: Mesa,
            key: 'id_mesa'
        }
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
    }
}, {
    sequelize,
    modelName: 'Pedido',
    indexes: [
        {
            unique: true,
            fields: ['id_pedido']
        }
    ]
});

Pedido.belongsTo(Usuario, { foreignKey: 'id_usuario_pedido' });
Usuario.hasMany(Pedido, { foreignKey: 'id_usuario_pedido' });
Pedido.belongsTo(Mesa, { foreignKey: 'id_mesa_pedido' });
Mesa.hasMany(Pedido, { foreignKey: 'id_mesa_pedido' });

/* Pedido.sync()
    .then(() => {
        console.log('Modelo Pedido sincronizado com o banco de dados.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar modelo Pedido com o banco de dados:', error);
    }); */

export default Pedido;
