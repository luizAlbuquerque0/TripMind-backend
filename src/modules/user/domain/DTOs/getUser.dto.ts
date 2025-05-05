import { UserEntity } from '../Entities/user.entity';

export type showUser = Omit<UserEntity, 'password'>;
