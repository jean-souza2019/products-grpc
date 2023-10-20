import { IsInt, IsNumber, IsString, Min } from 'class-validator';

export class Product {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01)
  price: number;
}
