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
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ApiPaginatedResponse } from 'src/infrastructures/util/paginated.dto';
import { ReqCreateMileageDTO } from '../scooters-mileage/dto/req-scooter-mileage';
import { ResScooterMileageDTO } from '../scooters-mileage/dto/res-scooter-mileage';
import { ReqCreateBodyDTO, ReqUpdateBodyDTO } from './dto/req-scooter.dto';
import { ScootersUseCase } from './scooters.ucase';
import { ResScooterDTO } from './dto/res-scooter.dto';
import { PaginatedDTO } from '../../infrastructures/util/paginated.dto';

@ApiTags('scooters')
@Controller('scooters')
export class ScootersContrller {
  constructor(private readonly scootersUseCase: ScootersUseCase) {}

  @ApiOperation({
    summary: '取得摩托車基本資訊',
  })
  @ApiPaginatedResponse(ResScooterDTO)
  @Get()
  async findByQuery(): Promise<PaginatedDTO<ResScooterDTO>> {
    return this.scootersUseCase.findByQuery();
  }

  @ApiOperation({
    summary: '取得單一摩托車基本資訊',
  })
  @ApiOkResponse({ type: ResScooterDTO })
  @Get('/:id')
  async findById(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<ResScooterDTO> {
    return this.scootersUseCase.findById(id);
  }

  @ApiOperation({
    summary: '新增摩托車基本資訊',
  })
  @ApiCreatedResponse({ type: ResScooterDTO })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createOne(@Body() body: ReqCreateBodyDTO): Promise<ResScooterDTO> {
    return this.scootersUseCase.createOne(body);
  }

  @ApiOperation({
    summary: '更新摩托車基本資訊',
  })
  @ApiOkResponse({ type: ResScooterDTO })
  @Patch('/:id')
  async updateById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: ReqUpdateBodyDTO,
  ): Promise<ResScooterDTO> {
    return this.scootersUseCase.updateById(id, body);
  }

  @ApiOperation({
    summary: '刪除摩托車基本資訊',
  })
  @ApiOkResponse({ type: Boolean })
  @Delete('/:id')
  async deleteById(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<boolean> {
    return this.scootersUseCase.deleteById(id);
  }

  /* mileage */
  @ApiOperation({
    summary: '新增摩托車里程資訊',
  })
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({ type: ResScooterMileageDTO })
  @Post('/:id/mileage')
  async createMileageById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: ReqCreateMileageDTO,
  ): Promise<ResScooterMileageDTO> {
    return this.scootersUseCase.createMileageById(id, body);
  }
}
