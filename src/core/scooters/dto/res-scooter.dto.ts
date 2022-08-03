import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { PaginatedDTO } from 'src/infrastructures/util/paginated.dto';
import { ScooterDTO } from './scooter.dto';

export class ResScooterDTO extends ScooterDTO {}

export class ResScooterDataListDTO extends PaginatedDTO<ScooterDTO> {}
