import { IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01)
  price: number;
}
