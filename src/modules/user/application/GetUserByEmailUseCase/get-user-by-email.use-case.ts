import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../../domain/Repositories/IUserRepository';
import { CreateUserDto } from '../../domain/DTOs/create-user.dto';
import { UserEntity } from '../../domain/Entities/user.entity';
import { hash } from 'bcryptjs';

@Injectable()
export class GetUserByEmailUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepo: IUserRepository,
  ) {}

  async execute(email: string): Promise<UserEntity | null> {
    try {
      const user = await this.userRepo.getUserByEmail(email);

      return user;
    } catch (error) {
      throw error;
    }
  }
}
