FROM node:20-slim

WORKDIR /app

COPY package.json tsconfig.json ./
RUN npm install

COPY src ./src
COPY bin ./bin
RUN npm run build && cp src/tools.json dist/tools.json

CMD ["node", "dist/index.js"]
