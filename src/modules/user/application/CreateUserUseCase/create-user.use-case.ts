import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../../domain/Repositories/IUserRepository';
import { CreateUserDto } from '../../domain/DTOs/create-user.dto';
import { UserEntity } from '../../domain/Entities/user.entity';
import { hash } from 'bcryptjs';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepo: IUserRepository,
  ) {}

  async execute(dto: CreateUserDto): Promise<string> {
    try {
      const { name, password, email } = dto;
      const sameEmail = await this.userRepo.getUserByEmail(dto.email);

      if (sameEmail) throw new BadRequestException('Email alredy taken');

      const hasedPassword = await hash(password, 10);
      const newUser = new UserEntity({
        name,
        email,
        password: hasedPassword,
      });

      return this.userRepo.createUser(newUser);
    } catch (error) {
      throw error;
    }
  }
}
