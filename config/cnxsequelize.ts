import { Sequelize } from "sequelize"
import db from "./config"

const sequelize = new Sequelize(db)

module.exports = sequelize
