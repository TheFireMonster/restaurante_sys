const {DataTypes} = require("sequelize")
const sequelize = require('../config/cnxconexaosequelize')
const sequelize = require("./Usuario")

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

    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    id_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    timestamps: false
})

module.exports=Produto