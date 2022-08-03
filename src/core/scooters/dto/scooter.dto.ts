import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { LicenseType, ScooterEngineType } from '../entities/ScooterEntity';

export class ScooterDataDTO {
  @ApiProperty({
    description: '機車類型',
    example: ScooterEngineType.OIL,
  })
  @IsString()
  @IsEnum(ScooterEngineType)
  @IsOptional()
  scooterEngineType?: ScooterEngineType;

  @ApiProperty({
    description: '牌照類型',
    example: LicenseType.LEVEL3,
  })
  @IsString()
  @IsEnum(LicenseType)
  @IsOptional()
  licenseType?: LicenseType;

  @ApiProperty({
    description: '牌照號碼',
    example: '123-ABC',
  })
  @IsString()
  @IsOptional()
  licenseNumber?: string;

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
    description: '廠牌',
    example: '山葉',
  })
  @IsString()
  @IsOptional()
  brand?: string;

  @ApiProperty({
    description: '廠牌型式',
    example: 'NXC125N',
  })
  @IsString()
  @IsOptional()
  brandType?: string;

  @ApiProperty({
    description: '引擎號碼',
    example: 'E3B123E3B123',
  })
  @IsString()
  @IsOptional()
  engineNumber?: string;

  @ApiProperty({
    description: '車身號碼',
    example: 'E3B123E3B123',
  })
  @IsString()
  @IsOptional()
  bodyNumber?: string;

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
    description: '發照日期',
  })
  @IsOptional()
  issuedDate?: Date;

  @ApiProperty({
    description: '出廠年月',
  })
  manufactureDate?: Date;

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

export class ScooterDTO extends ScooterDataDTO {
  @ApiProperty({
    description: 'scooter Id',
  })
  @IsString()
  @IsOptional()
  id: string;
}
