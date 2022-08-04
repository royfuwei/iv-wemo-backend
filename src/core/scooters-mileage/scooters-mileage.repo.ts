import _ = require('lodash');
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrmFindAndCount } from 'src/infrastructures/orm/util';
import { FindManyOptions, Repository } from 'typeorm';
import { ScooterMileageEntity } from './entities/ScooterMileageEntity';
import { ScooterEntity } from '../scooters/entities/ScooterEntity';
import {
  ReqCreateMileageDTO,
  ReqUpdateMileageDTO,
} from './dto/req-scooter-mileage';

@Injectable()
export class ScootersMileageRepo {
  constructor(
    @InjectRepository(ScooterMileageEntity)
    private readonly scooterMileageRepo: Repository<ScooterMileageEntity>,
  ) {}

  async findByOptions(
    options?: FindManyOptions<ScooterMileageEntity>,
  ): Promise<OrmFindAndCount<ScooterMileageEntity>> {
    const [items, count] = await this.scooterMileageRepo.findAndCount(options);
    return { items, count };
  }

  async findById(id: string) {
    const result = await this.scooterMileageRepo.findOne({
      where: { id },
    });
    if (_.isNull(result)) {
      throw new NotFoundException(`id: ${id} is not existed!!`);
    }
    return result;
  }

  async createByScooter(
    scooter: ScooterEntity,
    data: ReqCreateMileageDTO,
  ): Promise<ScooterMileageEntity> {
    const entity = new ScooterMileageEntity();
    entity.energyRate = data.energyRate;
    entity.mileage = data.mileage;
    entity.scooterId = scooter.id;
    const result = await this.scooterMileageRepo.save(entity);
    return result;
  }

  async updateById(id: string, data: ReqUpdateMileageDTO) {
    const result = await this.scooterMileageRepo.update({ id }, data);
    return this.findById(id);
  }

  async deleteById(id: string) {
    const result = await this.scooterMileageRepo.delete({ id });
    return result;
  }
}
