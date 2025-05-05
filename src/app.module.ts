import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PrismaService } from './infra/prisma/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { TravelModule } from './modules/travel/travel.module';

@Module({
  imports: [UserModule, AuthModule, TravelModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
