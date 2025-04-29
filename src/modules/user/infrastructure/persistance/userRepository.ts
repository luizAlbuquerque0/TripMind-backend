import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { IUserRepository } from '../../domain/Repositories/IUserRepository';
import { CreateUserDto } from '../../domain/DTOs/create-user.dto';
import { UserEntity } from '../../domain/Entities/user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getUserByEmail(
    email: string,
  ): Promise<Omit<UserEntity, 'password'> | null> {
    return await this.prisma.user.findUnique({
      where: { email },
      select: {
        email: true,
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
  }

  async createUser(user: UserEntity): Promise<string> {
    const createdUser = await this.prisma.user.create({
      data: user,
      select: {
        id: true,
      },
    });

    return createdUser.id;
  }
}
