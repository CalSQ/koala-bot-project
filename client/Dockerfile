FROM oven/bun

WORKDIR /koalabot
COPY package*.json ./
RUN bun install

COPY . .
RUN bun run build

CMD ["sh", "-c", "bun run start:prod"]
