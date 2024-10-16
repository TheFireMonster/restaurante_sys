import dotenv from 'dotenv';
dotenv.config();

interface DBConfig {
  dialect: string;
  host: string;
  username: string;
  password: string;
  database: string;
  port: any;
  define: {
    timestamps: boolean;
  };
}

const config: DBConfig = {
  dialect: process.env.DB_DIALECT || 'postgresql', 
  host: process.env.DB_HOST || '127.0.0.1',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || '',
  port: process.env.DB_PORT || 5432,
  define: {
    timestamps: true,
  },
};

const requiredEnvVariables = ['DB_DIALECT', 'DB_HOST', 'DB_USER', 'DB_PASS', 'DB_NAME', 'DB_PORT'];
requiredEnvVariables.forEach(variable => {
  if (!process.env[variable]) {
    console.error(`A variável de ambiente ${variable} não está definida.`);
    process.exit(1); 
  }
});

export default config;
