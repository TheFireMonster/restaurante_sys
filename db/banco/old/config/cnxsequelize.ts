import { Sequelize, Options } from "sequelize";
import config from "./config";

const sequelize = new Sequelize(config as Options);

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Não foi possível conectar ao banco de dados:', error);
  });

export { sequelize };
