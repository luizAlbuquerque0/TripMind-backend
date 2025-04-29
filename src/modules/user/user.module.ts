import { Module } from '@nestjs/common';
import { UserController } from './presentation/user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
