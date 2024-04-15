FROM oven/bun

WORKDIR /www/bot
COPY . .
RUN bun install

CMD ["sh", "-c", "bun run start:prod"]
