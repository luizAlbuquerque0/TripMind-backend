import { Injectable } from '@nestjs/common';
import { SignUpDto } from '../../domain/DTOs/sign-up.dto';
import { CreateUserUseCase } from 'src/modules/user/application/CreateUserUseCase/create-user.use-case';
import { sign } from 'jsonwebtoken';
import { env } from 'src/config/env';

@Injectable()
export class SignUpUseCase {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async execute(signUpDto: SignUpDto): Promise<any> {
    try {
      const userId = await this.createUserUseCase.execute(signUpDto);

      const accessToken = sign({ sub: userId }, env.jwtSecret, {
        expiresIn: '1d',
      });

      return {
        accessToken,
      };
    } catch (error) {
      throw error;
    }
  }
}
