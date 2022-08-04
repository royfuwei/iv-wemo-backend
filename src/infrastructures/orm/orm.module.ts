import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_SYNC,
} from '../../constants';
import { join } from 'path';
import { ScooterEntity } from 'src/core/scooters/entities/ScooterEntity';
import { ScooterMileageEntity } from '../../core/scooters-mileage/entities/ScooterMileageEntity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: DB_PORT,
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      entities: [
        ScooterEntity,
        ScooterMileageEntity,
        // join(__dirname, '../../core/**/entities/*{.ts,.js}')
      ],
      synchronize: DB_SYNC,
    }),
  ],
})
export class OrmModule {}
