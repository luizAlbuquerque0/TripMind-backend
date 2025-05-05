import { TravelEntity } from './travel.entity';

export const TRAVEL_REPOSITORY = 'TRAVEL_REPOSITORY';

export interface ITravelRepository {
  createTravel(travel: TravelEntity): Promise<string>;
}
