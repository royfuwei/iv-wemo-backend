import _ = require('lodash');
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrmFindAndCount } from 'src/infrastructures/orm/util';
import { FindManyOptions, Repository } from 'typeorm';
import { ScooterEntity } from './entities/ScooterEntity';
import { ScooterDataDTO } from './dto/scooter.dto';

@Injectable()
export class ScootersRepo {
  constructor(
    @InjectRepository(ScooterEntity)
    private readonly scooterRepo: Repository<ScooterEntity>,
  ) {}

  async findByOptions(
    options?: FindManyOptions<ScooterEntity>,
  ): Promise<OrmFindAndCount<ScooterEntity>> {
    const [items, count] = await this.scooterRepo.findAndCount(options);
    return { items, count };
  }

  async findById(id: string) {
    const result = await this.scooterRepo.findOne({
      where: { id },
    });
    if (_.isNull(result)) {
      throw new NotFoundException(`id: ${id} is not existed!!`);
    }
    return result;
  }

  async create(data: ScooterDataDTO): Promise<ScooterEntity> {
    const result = await this.scooterRepo.save(data);
    return result;
  }

  async updateById(id: string, data: ScooterDataDTO) {
    const result = await this.scooterRepo.update({ id }, data);
    return result;
  }

  async deleteById(id: string) {
    const result = await this.scooterRepo.delete({ id });
    return result;
  }
}
