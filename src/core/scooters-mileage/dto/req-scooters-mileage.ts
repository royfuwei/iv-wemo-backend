import _ from 'lodash';
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsArray, IsOptional, IsString } from 'class-validator';

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
