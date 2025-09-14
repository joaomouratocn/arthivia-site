# Etapa 1: Build
FROM node:20-alpine AS builder

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do projeto
COPY . .

# Fazer o build da aplicação
RUN npm run build

# Etapa 2: Servir a aplicação
FROM node:20-alpine AS runner

WORKDIR /app

# Copiar arquivos necessários do build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Expor a porta do Next.js
EXPOSE 3000

# Rodar o Next.js
CMD ["npm", "run", "start"]
