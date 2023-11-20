const { DataTypes } = require("sequelize")
const sequelize = require('../config/cnxsequelize')
const Pedido = require('./Pedido')
const Produto = require('./Produto')

const Item_pedido = sequelize.define('item_pedido', {
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
    indexes: [
        {
            unique: true,
            fields: ['id_item_pedido']
        }
    ]
})

Item_pedido.belongsTo(Pedido, { foreignKey: 'id_pedido_item_pedido' })
Pedido.hasMany(Item_pedido, {foreignKey: 'id_pedido_item_pedido'})
Item_pedido.belongsTo(Produto, { foreignKey: 'id_produto_item_pedido' })
Produto.hasMany(Item_pedido, {foreignKey: 'id_pedido_item_pedido'})

Item_pedido.sync()

module.exports = Item_pedido