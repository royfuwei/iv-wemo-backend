import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReqCreateMileageDTO } from '../scooters-mileage/dto/req-scooter-mileage';
import { ResScooterMileageDTO } from '../scooters-mileage/dto/res-scooter-mileage';
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
  async findById(@Param('id', new ParseUUIDPipe()) id: string) {
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
  async updateById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: ReqUpdateBodyDTO,
  ) {
    return this.scootersUseCase.updateById(id, body);
  }

  @ApiOperation({
    summary: '刪除摩托車基本資訊',
  })
  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.scootersUseCase.deleteById(id);
  }

  /* mileage */
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({ type: ResScooterMileageDTO })
  @Post('/:id/mileage')
  async createMileageById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: ReqCreateMileageDTO,
  ): Promise<ResScooterMileageDTO> {
    return this.scootersUseCase.createMileageById(id, body);
  }

  /* reply */
  @HttpCode(HttpStatus.CREATED)
  @Post('/:id/reply')
  async createReplyById() {
    return;
  }
}
