import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('scooters')
@Controller('scooters')
export class ScootersContrller {
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

  /* mileage */
  @HttpCode(HttpStatus.CREATED)
  @Post('/:id/mileage')
  async createMileageById() {
    return;
  }

  /* reply */
  @HttpCode(HttpStatus.CREATED)
  @Post('/:id/reply')
  async createReplyById() {
    return;
  }
}
