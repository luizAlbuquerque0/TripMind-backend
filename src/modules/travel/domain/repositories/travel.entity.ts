// src/core/entities/travel.entity.ts

export interface TravelProps {
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  budget?: number;
  userId: string;
  cities: string[];
}

export class TravelEntity {
  public readonly id: string;
  public readonly title: string;
  public readonly description?: string;
  public readonly startDate: Date;
  public readonly endDate: Date;
  public readonly budget?: number;
  public readonly userId: string;
  public readonly cities: string[];
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(
    props: TravelProps &
      Partial<Pick<TravelEntity, 'id' | 'createdAt' | 'updatedAt'>>,
  ) {
    this.title = props.title;
    this.description = props.description;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.budget = props.budget;
    this.userId = props.userId;
    this.cities = props.cities;
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }
}
