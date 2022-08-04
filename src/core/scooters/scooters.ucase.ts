import { Injectable } from '@nestjs/common';
import { PaginatedDTO } from 'src/infrastructures/util/paginated.dto';
import { ReqCreateMileageDTO } from '../scooters-mileage/dto/req-scooter-mileage';
import { ScootersMileageRepo } from '../scooters-mileage/scooters-mileage.repo';
import { ReqCreateBodyDTO, ReqUpdateBodyDTO } from './dto/req-scooter.dto';
import { ScootersRepo } from './scooters.repo';
import { ResScooterDTO } from './dto/res-scooter.dto';
import { ResScooterMileageDTO } from '../scooters-mileage/dto/res-scooter-mileage';

@Injectable()
export class ScootersUseCase {
  constructor(
    private readonly scootersRepo: ScootersRepo,
    private readonly scootersMileageRepo: ScootersMileageRepo,
  ) {}

  async findByQuery(): Promise<PaginatedDTO<ResScooterDTO>> {
    const { items, count } = await this.scootersRepo.findByOptions();
    return { items, total: count };
  }

  async findById(id: string): Promise<ResScooterDTO> {
    const result = await this.scootersRepo.findById(id);
    return result;
  }

  async createOne(body: ReqCreateBodyDTO): Promise<ResScooterDTO> {
    const result = await this.scootersRepo.create(body);
    return result;
  }

  async updateById(id: string, body: ReqUpdateBodyDTO): Promise<ResScooterDTO> {
    const result = await this.scootersRepo.updateById(id, body);
    return result;
  }

  async deleteById(id: string): Promise<boolean> {
    const result = await this.scootersRepo.deleteById(id);
    return result;
  }

  /* scooter mileage */
  async createMileageById(
    id: string,
    body: ReqCreateMileageDTO,
  ): Promise<ResScooterMileageDTO> {
    const scooter = await this.scootersRepo.findById(id);
    const result = await this.scootersMileageRepo.createByScooter(
      scooter,
      body,
    );
    return result;
  }
}
