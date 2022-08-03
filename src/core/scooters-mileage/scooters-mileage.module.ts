import { Module } from '@nestjs/common';
import { ScootersMileageContrller } from './scooters-mileage.controller';
import { ScootersMileageUseCase } from './scooters-mileage.ucase';

@Module({
  imports: [],
  providers: [ScootersMileageUseCase],
  controllers: [ScootersMileageContrller],
})
export class ScootersMileageModule {}
