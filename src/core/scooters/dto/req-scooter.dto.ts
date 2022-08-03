import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';
import { ScooterDataDTO } from './scooter.dto';

export class ReqCreateBodyDTO extends ScooterDataDTO {}

export class ReqUpdateBodyDTO {
  @ApiProperty({
    description: '車主',
    example: '機車車主',
  })
  @IsString()
  @IsOptional()
  ownerName?: string;

  @ApiProperty({
    description: '地址',
    example: '地址',
  })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({
    description: '顏色',
    example: '深灰',
  })
  @IsString()
  @IsOptional()
  color?: string;

  @ApiProperty({
    description: '排氣量',
    example: 124,
  })
  @IsNumber()
  @IsOptional()
  engineDisplacement?: number;

  @ApiProperty({
    description: '換補照日期',
  })
  @IsOptional()
  lastPrintLicenseDate?: Date;

  @ApiProperty({
    description: '有效日期',
  })
  @IsOptional()
  expiryDate?: Date;

  @ApiProperty({
    description: '管轄編號',
  })
  @IsOptional()
  administrationNumber?: string;
}
