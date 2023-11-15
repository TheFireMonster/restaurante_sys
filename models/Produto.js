const {DataTypes} = require("sequelize")
const sequelize = require('../config/cnxconexaosequelize')

const Produto = sequelize.define('produto', {
    id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    nome_produto: {
        type: DataTypes.STRING,
        length: 50,
        allowNull: false
    },

    descricao_produto: {
        type: DataTypes.STRING,
        length: 50,
        allowNull: false
    },

    preco_produto: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false
    },

    estoque: {
        type: DataTypes.INTEGER
    },

}, {
    timestamps: false
})

module.exports=Produto