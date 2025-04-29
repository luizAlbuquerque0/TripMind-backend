import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { SignUpUseCase } from '../application/SignUpUseCase/sign-up.use-case';
import { SignUpDto } from '../domain/DTOs/sign-up.dto';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}

  @Post('sign-up')
  @HttpCode(201)
  async signUpUser(@Body() data: SignUpDto) {
    return this.signUpUseCase.execute(data);
  }
}
