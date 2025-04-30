import { BadRequestException, Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { env } from 'src/config/env';
import { SignInDto } from '../../domain/DTOs/sign-in.dto';
import { GetUserByEmailUseCase } from 'src/modules/user/application/GetUserByEmailUseCase/get-user-by-email.use-case';
import { compare } from 'bcryptjs';

@Injectable()
export class SignInUseCase {
  constructor(private readonly getUserByEmailUseCase: GetUserByEmailUseCase) {}

  async execute(signInDto: SignInDto): Promise<any> {
    try {
      const { email, password } = signInDto;
      const user = await this.getUserByEmailUseCase.execute(email);

      if (!user) throw new BadRequestException(`Credenciais inválidas`);

      const isPasswordValid = await compare(password, user.password);
      if (!isPasswordValid) {
        throw new BadRequestException(`Credenciais inválidas`);
      }

      const accessToken = sign({ sub: user.id }, env.jwtSecret, {
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
