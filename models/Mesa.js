const {DataTypes} = require("sequelize")
const sequelize = require('../config/cnxconexaosequelize')

const Mesa = sequelize.define('mesa', {
    id_ingrediente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
}, {
    timestamps: false
})
module.exports=Mesa