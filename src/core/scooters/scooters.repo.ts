import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrmFindAndCount } from 'src/infrastructures/orm/util';
import { Repository } from 'typeorm';
import { ScooterEntity } from './entities/ScooterEntity';
import { ScooterDataDTO } from './dto/scooter.dto';

@Injectable()
export class ScootersRepo {
  constructor(
    @InjectRepository(ScooterEntity)
    private readonly scooterRepo: Repository<ScooterEntity>,
  ) {}

  async findAll(): Promise<OrmFindAndCount<ScooterEntity>> {
    const [items, count] = await this.scooterRepo.findAndCount();
    return { items, count };
  }

  async findById(id: string) {
    const result = await this.scooterRepo.findOne({
      where: { id },
    });
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
