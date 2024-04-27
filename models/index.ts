import fs from 'fs';
import path from 'path';
import { Sequelize, DataType } from 'sequelize-typescript';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db: any = {};

const sequelize = config.use_env_variable ?
  new Sequelize(config):
  new Sequelize(config.database, config.username, config.password, config);


fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && 
      file !== basename && 
      file.slice(-3) === '.js' && 
      file.indexOf('.test.js') === -1 
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataType);
    db[model.name] = model;
  });

// Associa os modelos
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
