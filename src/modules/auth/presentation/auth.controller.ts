import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { SignUpUseCase } from '../application/SignUpUseCase/sign-up.use-case';
import { SignUpDto } from '../domain/DTOs/sign-up.dto';
import { SignInUseCase } from '../application/SignInUseCase/sign-in.use.case';
import { SignInDto } from '../domain/DTOs/sign-in.dto';

@Controller('api/v1/auth')
export class AuthController {
  constructor(
    private readonly signUpUseCase: SignUpUseCase,
    private readonly signInUsecase: SignInUseCase,
  ) {}

  @Post('sign-up')
  @HttpCode(201)
  async signUpUser(@Body() data: SignUpDto) {
    return this.signUpUseCase.execute(data);
  }

  @Post('sign-in')
  @HttpCode(201)
  async signInUser(@Body() data: SignInDto) {
    return this.signInUsecase.execute(data);
  }
}
