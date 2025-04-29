import { Module } from '@nestjs/common';
import { UserController } from './presentation/user.controller';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { UserUseCases } from './application/useCases';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [PrismaService, ...UserUseCases],
  exports: [PrismaService],
})
export class UserModule {}
