const {DataTypes} = require("sequelize")
const sequelize = require('../config/cnxconexaosequelize')

const Pedido = sequelize.define('pedido', {
    id_item_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    id_produto_item_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    quantidade_item_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    id_produto_item_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    valor: {
        type: DataTypes.DECIMAL(8, 2)
    },

    total_item: {
        type: DataTypes.DECIMAL(8, 2)
    }
}, {
    timestamps: false
})

module.exports=Pedido