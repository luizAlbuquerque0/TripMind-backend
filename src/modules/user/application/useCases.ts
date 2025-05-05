import { CreateUserUseCase } from './CreateUserUseCase/create-user.use-case';
import { GetUserByEmailUseCase } from './GetUserByEmailUseCase/get-user-by-email.use-case';
import { GetMeUseCase } from './GetMeUseCase/get-me.use-case';

export const UserUseCases = [
  CreateUserUseCase,
  GetUserByEmailUseCase,
  GetMeUseCase,
];
