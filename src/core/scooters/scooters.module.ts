import { Module } from '@nestjs/common';
import { ScootersMileageModule } from '../scooters-mileage/scooters-mileage.module';
import { ScootersReplyModule } from '../scooters-reply/scooters-reply.module';
import { ScootersContrller } from './scooters.controller';
import { ScootersRepo } from './scooters.repo';
import { ScootersUseCase } from './scooters.ucase';

@Module({
  imports: [ScootersMileageModule, ScootersReplyModule],
  providers: [ScootersUseCase, ScootersRepo],
  controllers: [ScootersContrller],
})
export class ScootersModule {}
