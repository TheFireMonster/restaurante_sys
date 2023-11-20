const { DataTypes } = require("sequelize")
const sequelize = require('../config/cnxsequelize')
const Usuario = require("./Usuario")
const Pedido = require("./Pedido")

const Pagamento = sequelize.define('pagamento', {
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
    indexes: [
        {
            unique: true,
            fields: ['id_pagamento']
        }
    ]
})

Pagamento.belongsTo(Usuario, { foreignKey: 'id_usuario_pagamento' })
Usuario.hasMany(Pagamento, {foreignKey: 'id_usuario_pagamento'})
Pagamento.belongsTo(Pedido, { foreignKey: 'id_pedido_pagamento' })
Pedido.hasMany(Pagamento, { foreignKey: 'id_pedido_pagamento' })

Pagamento.sync()

module.exports = Pagamento
