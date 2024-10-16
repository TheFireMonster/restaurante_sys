# Use a imagem oficial do PostgreSQL como base
FROM postgres

# Defina as variáveis de ambiente com valores passados durante a construção
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=restaurante_sys

# Copie os arquivos de inicialização (opcional)
# Se você tiver scripts SQL ou arquivos de inicialização, você pode copiá-los para o contêiner
COPY db/init-scripts/ /docker-entrypoint-initdb.d/

# Exponha a porta padrão do PostgreSQL
EXPOSE 5432

# O comando padrão já é definido pela imagem base