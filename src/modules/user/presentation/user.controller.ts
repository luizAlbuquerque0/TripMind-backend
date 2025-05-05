import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetMeUseCase } from '../application/GetMeUseCase/get-me.use-case';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly getMeUseCase: GetMeUseCase) {}

  @Get('me')
  @UseGuards(AuthGuard)
  async getMe(@CurrentUser() user: { id: string }) {
    return this.getMeUseCase.execute(user.id);
  }
}
