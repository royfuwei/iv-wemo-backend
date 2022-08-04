import { Injectable } from '@nestjs/common';
import { PaginatedDTO } from 'src/infrastructures/util/paginated.dto';
import { ResScooterMileageDTO } from './dto/res-scooter-mileage';
import { ScootersMileageRepo } from './scooters-mileage.repo';
import { ReqUpdateMileageDTO } from './dto/req-scooter-mileage';

@Injectable()
export class ScootersMileageUseCase {
  constructor(private readonly scootersMileageRepo: ScootersMileageRepo) {}

  async findByQuery(): Promise<PaginatedDTO<ResScooterMileageDTO>> {
    const { items, count } = await this.scootersMileageRepo.findByOptions();
    const result: PaginatedDTO<ResScooterMileageDTO> = {
      items,
      total: count,
    };
    return result;
  }

  async updateById(id: string, body: ReqUpdateMileageDTO) {
    const result = await this.scootersMileageRepo.updateById(id, body);
    return result;
  }

  async deleteById(id: string) {
    const result = await this.scootersMileageRepo.deleteById(id);
    return result;
  }
}
