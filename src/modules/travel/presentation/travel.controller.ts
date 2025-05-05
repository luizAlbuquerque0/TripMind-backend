import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { CreateTravelUseCase } from '../application/createTravelUseCase/create-travel.use-case';
import { CreateTravelDto } from '../domain/DTOs/createTravel.dto';

@Controller('api/v1/travels')
@UseGuards(AuthGuard)
export class TravelController {
  constructor(private readonly createTravelUseCase: CreateTravelUseCase) {}

  @Post()
  async createTravel(
    @CurrentUser() user: { id: string },
    @Body() body: CreateTravelDto,
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await this.createTravelUseCase.execute(body, user.id);
  }
}
