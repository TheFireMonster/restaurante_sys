const { DataTypes } = require("sequelize")
const sequelize = require('../config/cnxsequelize')

const Mesa = sequelize.define('mesa', {
    id_mesa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
})

Mesa.sync()

module.exports = Mesa
