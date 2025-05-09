import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { IUserRepository } from '../../domain/Repositories/IUserRepository';
import { UserEntity } from '../../domain/Entities/user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getUserByEmail(email: string): Promise<UserEntity | null> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async getUserById(id: string): Promise<UserEntity | null> {
    return await this.prisma.user.findUnique({
      where: { id },
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
