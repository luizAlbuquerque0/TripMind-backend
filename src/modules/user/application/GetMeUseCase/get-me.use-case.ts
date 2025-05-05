import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../../domain/Repositories/IUserRepository';
import { UserEntity } from '../../domain/Entities/user.entity';

@Injectable()
export class GetMeUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepo: IUserRepository,
  ) {}

  async execute(userId: string): Promise<Omit<UserEntity, 'password'>> {
    const user = await this.userRepo.getUserById(userId);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }
}
