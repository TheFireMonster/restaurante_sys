import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/cnxsequelize'; 
import Usuario from './Usuario'; 
import Pedido from './Pedido'; 

interface PagamentoAttributes {
    id_pagamento: number;
    data_pagamento: Date;
    valor_pagamento: number;
    id_usuario_pagamento: number;
    id_pedido_pagamento: number;
}

class Pagamento extends Model<PagamentoAttributes> implements PagamentoAttributes {
    public id_pagamento!: number;
    public data_pagamento!: Date;
    public valor_pagamento!: number;
    public id_usuario_pagamento!: number;
    public id_pedido_pagamento!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Pagamento.init({
    id_pagamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    data_pagamento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    valor_pagamento: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false
    },
    id_usuario_pagamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    },
    id_pedido_pagamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Pedido,
            key: 'id_pedido'
        }
    }
}, {
    sequelize,
    modelName: 'Pagamento',
    indexes: [
        {
            unique: true,
            fields: ['id_pagamento']
        }
    ]
});

Pagamento.belongsTo(Usuario, { foreignKey: 'id_usuario_pagamento' });
Usuario.hasMany(Pagamento, { foreignKey: 'id_usuario_pagamento' });
Pagamento.belongsTo(Pedido, { foreignKey: 'id_pedido_pagamento' });
Pedido.hasMany(Pagamento, { foreignKey: 'id_pedido_pagamento' });

Pagamento.sync()
    .then(() => {
        console.log('Modelo Pagamento sincronizado com o banco de dados.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar modelo Pagamento com o banco de dados:', error);
    });

export default Pagamento;
