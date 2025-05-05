import { showUser } from '../DTOs/getUser.dto';
import { UserEntity } from '../Entities/user.entity';

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface IUserRepository {
  createUser(user: UserEntity): Promise<string>;
  getUserByEmail(email: string): Promise<UserEntity | null>;
  getUserById(id: string): Promise<showUser | null>;
}
