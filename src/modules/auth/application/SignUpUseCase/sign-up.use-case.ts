import { Injectable } from '@nestjs/common';
import { SignUpDto } from '../../domain/DTOs/sign-up.dto';
import { CreateUserUseCase } from 'src/modules/user/application/CreateUserUseCase/create-user.use-case';

@Injectable()
export class SignUpUseCase {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async execute(signUpDto: SignUpDto): Promise<any> {
    try {
      const userId = this.createUserUseCase.execute(signUpDto);

      return {
        userId,
      };
    } catch (error) {
      throw error;
    }
  }
}
