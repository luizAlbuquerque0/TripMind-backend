import { CreateUserDto } from '../DTOs/create-user.dto';
import { UserEntity } from '../Entities/user.entity';

export interface IUserRepository {
  createUser(user: UserEntity): Promise<string>;
  getUserByEmail(email: string): Promise<Omit<UserEntity, 'password'> | null>;
}
