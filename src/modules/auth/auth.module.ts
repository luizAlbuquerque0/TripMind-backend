import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './presentation/auth.controller';
import { UserModule } from '../user/user.module';
import { AuthUseCases } from './application/useCases';

@Module({
  imports: [forwardRef(() => UserModule)],
  controllers: [AuthController],
  providers: [...AuthUseCases],
})
export class AuthModule {}
