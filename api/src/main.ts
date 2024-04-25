import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';

import cookieSession from 'cookie-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Environment checks
  if (
    !process.env.COOKIE_SECRET ||
    !process.env.FRONTEND_HOST ||
    !process.env.PORT
  ) {
    throw new Error('Missing required environment variables');
  }

  app.setGlobalPrefix('api');

  // Middlewares;
  app.use(cookieParser());

  app.use(
    session({
      name: 'DISCORD_SESSION',
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      proxy: true,
      cookie: {
        maxAge: 604_800_000,
        httpOnly: true,
        signed: true,
        secure: process.env.NODE_ENV === 'production',
      },
    }),
  );

  // CORS
  app.enableCors({
    origin: process.env.FRONTEND_HOST,
    credentials: true,
  });
  app.set('trust proxy', 1);

  // Initiate application
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
