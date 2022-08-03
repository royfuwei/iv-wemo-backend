import { Injectable } from '@nestjs/common';
import { ReqCreateBodyDTO, ReqUpdateBodyDTO } from './dto/req-scooter.dto';
import { ScootersRepo } from './scooters.repo';

@Injectable()
export class ScootersUseCase {
  constructor(private readonly scootersRepo: ScootersRepo) {}

  async findByQuery() {
    const results = await this.scootersRepo.findAll();
    return results;
  }

  async findById(id: string) {
    const result = await this.scootersRepo.findById(id);
    return result;
  }

  async createOne(body: ReqCreateBodyDTO) {
    const result = await this.scootersRepo.create(body);
    return result;
  }

  async updateById(id: string, body: ReqUpdateBodyDTO) {
    const result = await this.scootersRepo.updateById(id, body);
    return result;
  }

  async deleteById(id: string) {
    const result = await this.scootersRepo.deleteById(id);
    return result;
  }
}
