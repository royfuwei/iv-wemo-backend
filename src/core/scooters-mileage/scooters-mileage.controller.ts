import { Controller, Delete, Get, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('scooters-mileage')
@Controller('scooters-mileage')
export class ScootersMileageContrller {
  @Get()
  async findByQuery() {
    return;
  }

  @Patch('/:id')
  async updateById() {
    return;
  }

  @Delete('/:id')
  async deleteById() {
    return;
  }
}
