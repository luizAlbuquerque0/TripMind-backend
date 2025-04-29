import { BadRequestException, Injectable } from '@nestjs/common';
import { IUserRepository } from '../../domain/Repositories/IUserRepository';
import { CreateUserDto } from '../../domain/DTOs/create-user.dto';
import { UserEntity } from '../../domain/Entities/user.entity';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepo: IUserRepository) {}

  async execute(dto: CreateUserDto): Promise<string> {
    try {
      const sameEmail = await this.userRepo.getUserByEmail(dto.email);

      if (sameEmail) throw new BadRequestException('Email alredy taken');

      const newUser = new UserEntity(dto);

      return this.userRepo.createUser(newUser);
    } catch (error) {
      throw error;
    }
  }
}
