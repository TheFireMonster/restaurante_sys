const { DataTypes } = require("sequelize")
const sequelize = require('../config/cnxsequelize')
const bcrypt = require('bcrypt')

const Usuario = sequelize.define('usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    senha_usuario: {
        type: DataTypes.STRING(50),
        allowNull: false,
        set(value) {
            const hash = bcrypt.hasSync(value, 11)
            this.setDataValue('senha_usuario', hash)
        }
    },

    nome_usuario: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    cpf_usuario: {
        type: DataTypes.STRING(14),
        allowNull: false
    },

    telefone_usuario: {
        type: DataTypes.STRING(14),
        allowNull: false
    },

    email_usuario: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    tipo_usuario: {
        type: DataTypes.STRING(15),
        defaultValue: 'garçom'
    }
}, {
    indexes: [
        {
            unique: true,
            fields: ['id_usuario']
        }
    ]
})

Usuario.prototype.validPassword = function(senha_usuario) {
    return bcrypt.compareSync(senha_usuario, this.senha_usuario)
}


Usuario.sync({alter:true})

module.exports = Usuario
