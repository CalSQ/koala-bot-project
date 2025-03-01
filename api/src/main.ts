import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(process.env.DISCORD_APP_ID);

  app.setGlobalPrefix('api');

  // Middlewares
  app.use(cookieParser());

  app.use(
    session({
      name: 'DISCORD_SESSION',
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 86_400_000,
      },
    }),
  );

  app.enableCors({
    origin:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001'
        : 'http://152.53.21.200:3001',
    credentials: true,
  });

  try {
    await app.listen(process.env.PORT);
    console.log(
      `Running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`,
    );
  } catch (err) {
    throw new Error(`Could not listen for port: ${process.env.PORT}`);
  }
}

bootstrap();
