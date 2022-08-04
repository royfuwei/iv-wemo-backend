import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class ScooterMileageDataDTO {
  @ApiProperty({
    description: '里程數',
    example: 100,
  })
  @IsNumber()
  mileage?: number;

  @ApiProperty({
    description: '油箱/電量 百分比 0-1',
    example: 0.4,
  })
  @IsNumber()
  @Min(0)
  @Max(1)
  @Type(() => Number)
  energyRate?: number;
}

export class ScooterMileageDTO extends ScooterMileageDataDTO {
  @ApiProperty({
    description: 'scooter mileage Id',
  })
  @IsString()
  @IsUUID()
  @IsOptional()
  id?: string;

  @ApiProperty({
    description: 'scooter Id',
  })
  @IsString()
  @IsUUID()
  @IsOptional()
  scooterId?: string;

  @ApiProperty({
    description: '資料建立時間',
  })
  @IsDate()
  @IsOptional()
  createAt?: Date;

  @ApiProperty({
    description: '資料更新時間',
  })
  @IsDate()
  @IsOptional()
  updateAt?: Date;
}
