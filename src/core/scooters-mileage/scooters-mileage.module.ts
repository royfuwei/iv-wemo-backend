import { Module } from '@nestjs/common';
import { ScooterMileageEntity } from './entities/ScooterMileageEntity';
import { ScootersMileageContrller } from './scooters-mileage.controller';
import { ScootersMileageUseCase } from './scooters-mileage.ucase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScootersMileageRepo } from './scooters-mileage.repo';

@Module({
  imports: [TypeOrmModule.forFeature([ScooterMileageEntity])],
  providers: [ScootersMileageUseCase, ScootersMileageRepo],
  exports: [ScootersMileageUseCase, ScootersMileageRepo],
  controllers: [ScootersMileageContrller],
})
export class ScootersMileageModule {}
