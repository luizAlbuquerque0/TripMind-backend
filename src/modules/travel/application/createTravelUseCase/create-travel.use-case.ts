import { Injectable, Inject } from '@nestjs/common';

import {
  ITravelRepository,
  TRAVEL_REPOSITORY,
} from '../../domain/repositories/ITravelRepository';
import { CreateTravelDto } from '../../domain/DTOs/createTravel.dto';
import { TravelEntity } from '../../domain/repositories/travel.entity';

@Injectable()
export class CreateTravelUseCase {
  constructor(
    @Inject(TRAVEL_REPOSITORY)
    private readonly travelRepo: ITravelRepository,
  ) {}

  async execute(dto: CreateTravelDto, userId: string): Promise<any> {
    const { title, description, startDate, endDate, budget, cities } = dto;

    const travel = new TravelEntity({
      title,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      budget,
      cities,
      userId,
    });

    const travelId = await this.travelRepo.createTravel(travel);

    return travelId;
  }
}
