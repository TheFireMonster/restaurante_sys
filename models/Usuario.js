const {DataTypes} = require("sequelize")
const sequelize = require('../config/cnxconexaosequelize')

const Usuario = sequelize.define('usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    senha_usuario: {
        type: DataTypes.STRING(50)
    },

    nome_usuario: {
        type: DataTypes.STRING(50)
    },

    cpf_usuario: {
        type: DataTypes.STRING(14)
    },

    telefone_usuario: {
        type: DataTypes.STRING(14)
    },

    email_usuario: {
        type: DataTypes.STRING(50)
    },
    
    tipo_usuario: {
        type: DataTypes.STRING(15)
    }
})

module.exports=Usuario