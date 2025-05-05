// src/modules/travel/infrastructure/persistance/travel.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { ITravelRepository } from '../../domain/repositories/ITravelRepository';
import { TravelEntity } from '../../domain/repositories/travel.entity';

@Injectable()
export class TravelRepository implements ITravelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createTravel(travel: TravelEntity): Promise<string> {
    const created = await this.prisma.travel.create({
      data: {
        title: travel.title,
        description: travel.description,
        startDate: travel.startDate,
        endDate: travel.endDate,
        budget: travel.budget,
        userId: travel.userId,

        // aqui vem o nested write para TravelCity
        cities: {
          create: travel.cities.map((externalId, index) => ({
            order: index,
            city: {
              connectOrCreate: {
                where: { externalId },
                create: {
                  externalId,
                  name: externalId,
                  countryCode: null,
                },
              },
            },
          })),
        },
      },
      select: { id: true },
    });

    return created.id;
  }
}
