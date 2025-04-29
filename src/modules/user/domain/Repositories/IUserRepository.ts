import { CreateUserDto } from '../DTOs/create-user.dto';
import { UserEntity } from '../Entities/user.entity';

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface IUserRepository {
  createUser(user: UserEntity): Promise<string>;
  getUserByEmail(email: string): Promise<Omit<UserEntity, 'password'> | null>;
}
