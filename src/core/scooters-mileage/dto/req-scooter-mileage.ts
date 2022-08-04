import _ from 'lodash';
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsArray, IsOptional, IsString } from 'class-validator';
import { ScooterMileageDataDTO } from './scooter-mileage.dto';

export class ReqGetMileageQuery {
  @ApiProperty({
    description: 'scooterId列表',
    required: false,
    type: String,
    isArray: true,
  })
  @IsUUID()
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly postIds?: string[];
}

export class ReqCreateMileageDTO extends ScooterMileageDataDTO {}
export class ReqUpdateMileageDTO extends ScooterMileageDataDTO {}
