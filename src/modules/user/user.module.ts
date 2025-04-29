import { Module } from '@nestjs/common';
import { UserUseCases } from './application/useCases';
import { UserController } from './presentation/user.controller';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { UserRepository } from './infrastructure/persistance/userRepository';
import { USER_REPOSITORY } from './domain/Repositories/IUserRepository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    ...UserUseCases,
    PrismaService,
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
  exports: [...UserUseCases],
})
export class UserModule {}
