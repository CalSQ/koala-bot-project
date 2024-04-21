import { Module } from '@nestjs/common';
import { SERVICES } from 'src/utils/constants';
import { RobloxService } from './services/roblox.service';
import { RobloxController } from './controllers/roblox.controller';
import { UsersModule } from 'src/user/user.module';

@Module({
  imports: [UsersModule],
  providers: [
    {
      provide: SERVICES.ROBLOX,
      useClass: RobloxService,
    },
  ],
  controllers: [RobloxController],
  exports: [],
})
export class RobloxModule {}
