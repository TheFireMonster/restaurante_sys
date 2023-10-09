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

    quantidade_produto: {
        type: DataTypes.INTEGER,
    },

    valor_produto: {
    }
})

module.exports=Produto