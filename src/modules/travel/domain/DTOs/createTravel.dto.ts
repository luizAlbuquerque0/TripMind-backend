import {
  IsString,
  IsOptional,
  IsDateString,
  IsArray,
  ArrayMinSize,
  ArrayUnique,
  IsUUID,
  IsNumber,
  Min,
} from 'class-validator';

export class CreateTravelDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDateString(
    {},
    { message: 'startDate deve estar no formato ISO (YYYY-MM-DDTHH:mm:ssZ)' },
  )
  startDate: string;

  @IsDateString(
    {},
    { message: 'endDate deve estar no formato ISO (YYYY-MM-DDTHH:mm:ssZ)' },
  )
  endDate: string;

  @IsOptional()
  @IsNumber({}, { message: 'budget deve ser um número' })
  @Min(0, { message: 'budget não pode ser negativo' })
  budget?: number;

  @IsArray()
  @ArrayMinSize(1, {
    message: 'Você deve informar ao menos uma cidade no roteiro',
  })
  @ArrayUnique({ message: 'Não pode haver cidades duplicadas na lista' })
  @IsUUID('4', {
    each: true,
    message: 'Cada item de cities deve ser um UUID válido',
  })
  cities: string[];
}
