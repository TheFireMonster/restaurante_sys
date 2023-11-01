const {DataTypes} = require("sequelize")
const sequelize = require('../config/cnxconexaosequelize')

const Ingrediente = sequelize.define('ingrediente', {
    id_ingrediente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    quantidade_ingrediente: {
        type: DataTypes.INTEGER
    },

    unidade_medida: {
        type: DataTypes.STRING(2)
    },

    nome_ingrediente: {
        type: DataTypes.STRING(50)
    }
})

module.exports=Ingrediente
