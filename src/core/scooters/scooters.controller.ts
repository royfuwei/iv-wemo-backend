import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReqCreateBodyDTO, ReqUpdateBodyDTO } from './dto/req-scooter.dto';
import { ScootersUseCase } from './scooters.ucase';

@ApiTags('scooters')
@Controller('scooters')
export class ScootersContrller {
  constructor(private readonly scootersUseCase: ScootersUseCase) {}

  @ApiOperation({
    summary: '取得摩托車基本資訊',
  })
  @Get()
  async findByQuery() {
    return this.scootersUseCase.findByQuery();
  }

  @ApiOperation({
    summary: '取得單一摩托車基本資訊',
  })
  @Get('/:id')
  async findById(@Param('id') id: string) {
    return this.scootersUseCase.findById(id);
  }

  @ApiOperation({
    summary: '新增摩托車基本資訊',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createOne(@Body() body: ReqCreateBodyDTO) {
    return this.scootersUseCase.createOne(body);
  }

  @ApiOperation({
    summary: '更新摩托車基本資訊',
  })
  @Patch('/:id')
  async updateById(@Param('id') id: string, @Body() body: ReqUpdateBodyDTO) {
    return this.scootersUseCase.updateById(id, body);
  }

  @ApiOperation({
    summary: '刪除摩托車基本資訊',
  })
  @Delete('/:id')
  async deleteById(@Param('id') id: string) {
    return this.scootersUseCase.deleteById(id);
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
