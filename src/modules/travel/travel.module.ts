import { Module } from '@nestjs/common';
import { TravelUseCases } from './application/useCases';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { TRAVEL_REPOSITORY } from './domain/repositories/ITravelRepository';
import { TravelRepository } from './infrastructure/persistance/travel.repository';
import { TravelController } from './presentation/travel.controller';

@Module({
  imports: [],
  controllers: [TravelController],
  providers: [
    ...TravelUseCases,
    {
      provide: TRAVEL_REPOSITORY,
      useClass: TravelRepository,
    },
    PrismaService,
  ],
  exports: [...TravelUseCases],
})
export class TravelModule {}
