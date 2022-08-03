import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('scooters-mileage')
@Controller('scooters-mileage')
export class ScootersMileageContrller {
  @Get()
  async findByQuery() {
    return;
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createOne() {
    return;
  }

  @Patch('/:id')
  async updateById() {
    return;
  }
}
