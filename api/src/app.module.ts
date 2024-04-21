import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DiscordModule } from './discord/discord.module';
import { RobloxModule } from './roblox/roblox.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      autoIndex: true,
    }),
    AuthModule,
    UsersModule,
    DiscordModule,
    RobloxModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
