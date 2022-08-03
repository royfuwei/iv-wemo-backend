import {
  Controller,
  Delete,
  Get,
  Patch,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReqGetReplyQuery } from './dto/req-scooters-reply.dto';

@ApiTags('scooters-reply')
@Controller('scooters-reply')
export class ScootersReplyContrller {
  @Get()
  async findByQuery(
    @Query(new ValidationPipe({ transform: true })) query: ReqGetReplyQuery,
  ) {
    return query;
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
