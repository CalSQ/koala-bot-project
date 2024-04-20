import { Module } from '@nestjs/common';
import { SERVICES } from 'src/utils/constants';
import { RobloxService } from './services/roblox.service';
import { RobloxController } from './controllers/roblox.controller';

@Module({
  imports: [],
  providers: [
    {
      provide: SERVICES.DISCORD,
      useClass: RobloxService,
    },
  ],
  controllers: [RobloxController],
  exports: [],
})
export class DiscordModule {}
