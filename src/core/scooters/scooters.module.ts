import { Module } from '@nestjs/common';
import { ScootersMileageModule } from '../scooters-mileage/scooters-mileage.module';
import { ScootersReplyModule } from '../scooters-reply/scooters-reply.module';
import { ScootersContrller } from './scooters.controller';
import { ScootersRepo } from './scooters.repo';
import { ScootersUseCase } from './scooters.ucase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScooterEntity } from './entities/ScooterEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ScooterEntity]),
    ScootersMileageModule,
    ScootersReplyModule,
  ],
  providers: [ScootersUseCase, ScootersRepo],
  controllers: [ScootersContrller],
})
export class ScootersModule {}
