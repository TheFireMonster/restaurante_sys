# Usa a imagem oficial do Node.js como base
FROM node:17-alpine

# Define o diretório do trabalho dentro do container
WORKDIR /src

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./
COPY typescript*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Expõe a porta que a aplicação vai utilizar
EXPOSE 3000

# Define o comando para iniciar a aplicação
CMD [ "npm", "start" ]