import { Module } from '@nestjs/common';
import { UserUseCases } from './application/useCases';
import { UserController } from './presentation/user.controller';
import { UserRepository } from './infrastructure/persistance/userRepository';
import { USER_REPOSITORY } from './domain/Repositories/IUserRepository';
import { PrismaService } from 'src/infra/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    ...UserUseCases,
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
    PrismaService,
  ],
  exports: [...UserUseCases],
})
export class UserModule {}
