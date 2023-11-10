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
        type: DataTypes.INTEGER
    },

    valor_produto: {
        type: DataTypes.DECIMAL(10, 2)
    },

    tipo_produto: {
        type: DataTypes.STRING(50)
    },

    produto_transformacao: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: false
})

module.exports=Produto