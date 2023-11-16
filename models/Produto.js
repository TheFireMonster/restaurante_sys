const { DataTypes } = require("sequelize")
const sequelize = require('../config/cnxsequelize')

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

    quantidade_produto: {
        type: DataTypes.INTEGER
    },

    tipo_produto: {
        type: DataTypes.STRING,
        length: 15
    },

    produto_transformacao: {
        type: DataTypes.BOOLEAN,
    }
}, {
    indexes: [
        {
            unique: true,
            fields: ['id_produto']
        }
    ]
})

Produto.sync({alter:true})

module.exports = Produto
