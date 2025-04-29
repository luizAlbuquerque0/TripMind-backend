import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @MinLength(6, { message: 'A senha precisa de no mínimo 6 caracteres' })
  password: string;
}
