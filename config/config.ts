import dotenv from 'dotenv';
dotenv.config();

interface DBConfig {
  dialect: string;
  host: string;
  username: string;
  password: string;
  database: string;
  define: {
    timestamps: boolean;
  };
}

const config: DBConfig = {
  dialect: process.env.DB_DIALECT || 'postgresql', 
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || '',
  define: {
    timestamps: true,
  },
};

const requiredEnvVariables = ['DB_DIALECT', 'DB_HOST', 'DB_USER', 'DB_PASS', 'DB_NAME'];
requiredEnvVariables.forEach(variable => {
  if (!process.env[variable]) {
    console.error(`A variável de ambiente ${variable} não está definida.`);
    process.exit(1); 
  }
});

export default config;
