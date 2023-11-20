const { DataTypes } = require("sequelize")
const sequelize = require('../config/cnxsequelize')
const Usuario = require('./Usuario')
const Mesa = require('./Mesa')

const Pedido = sequelize.define('pedido', {
    id_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
    indexes: [
        {
            unique: true,
            fields: ['id_pedido']
        }
    ]
})

Pedido.belongsTo(Usuario, {foreignKey: 'id_usuario_pedido'})
Usuario.hasMany(Pedido, {foreignKey: 'id_usuario_pedido'})
Pedido.belongsTo(Mesa, {foreignKey: 'id_mesa_pedido'})
Mesa.hasMany(Pedido, { foreignKey: 'id_mesa_pedido' })


Pedido.sync()

module.exports = Pedido
