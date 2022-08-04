import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class GeoPointDTO {
  @ApiProperty({
    description: 'GeoJson type',
    example: 'Point',
  })
  @IsString()
  type = 'Point';

  @ApiProperty({
    description: 'Point 座標',
    example: [121.56, 25.14],
    type: [Number],
  })
  @IsNumber()
  coordinates: number[] = [121.56, 25.14];
}
