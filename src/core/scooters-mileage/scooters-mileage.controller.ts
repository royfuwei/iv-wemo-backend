import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiPaginatedResponse } from 'src/infrastructures/util/paginated.dto';
import { ResScooterMileageDTO } from './dto/res-scooter-mileage';
import { ScootersMileageUseCase } from './scooters-mileage.ucase';
import { PaginatedDTO } from '../../infrastructures/util/paginated.dto';
import { ReqUpdateMileageDTO } from './dto/req-scooter-mileage';

@ApiTags('scooters-mileage')
@Controller('scooters-mileage')
export class ScootersMileageContrller {
  constructor(
    private readonly scootersMileageUseCase: ScootersMileageUseCase,
  ) {}

  @ApiOperation({
    summary: '取得摩托車里程資訊',
  })
  @ApiPaginatedResponse(ResScooterMileageDTO)
  @Get()
  async findByQuery(): Promise<PaginatedDTO<ResScooterMileageDTO>> {
    return this.scootersMileageUseCase.findByQuery();
  }

  @ApiOperation({
    summary: '更新摩托車里程資訊',
  })
  @ApiOkResponse({ type: ResScooterMileageDTO })
  @Patch('/:id')
  async updateById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: ReqUpdateMileageDTO,
  ) {
    return this.scootersMileageUseCase.updateById(id, body);
  }

  @ApiOperation({
    summary: '刪除摩托車里程資訊',
  })
  @ApiOkResponse({ type: Boolean })
  @Delete('/:id')
  async deleteById(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<boolean> {
    return this.scootersMileageUseCase.deleteById(id);
  }
}
