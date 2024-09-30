# Use a imagem oficial do PostgreSQL como base
FROM postgres:latest

# Defina as variáveis de construção
ARG POSTGRES_USER
ARG POSTGRES_PASSWORD
ARG POSTGRES_DB

# Defina as variáveis de ambiente com valores passados durante a construção
ENV POSTGRES_USER=${POSTGRES_USER}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ENV POSTGRES_DB=${POSTGRES_DB}

# Copie os arquivos de inicialização (opcional)
# Se você tiver scripts SQL ou arquivos de inicialização, você pode copiá-los para o contêiner
COPY db/init-scripts/ /docker-entrypoint-initdb.d/

# Exponha a porta padrão do PostgreSQL
EXPOSE 5432

# O comando padrão já é definido pela imagem base