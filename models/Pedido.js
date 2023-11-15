const {DataTypes} = require("sequelize")
const sequelize = require('../config/cnxconexaosequelize')

const Pedido = sequelize.define('pedido', {
    id_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    id_usuario_pedido: {
        type: DataTypes.INTEGER
    },

    data_pedido: {
        type: DataTypes.INTEGER,
    },

    total_pedido: {
        type: DataTypes.DECIMAL(8, 2)
    }
}, {
    timestamps: false
})

module.exports=Pedido