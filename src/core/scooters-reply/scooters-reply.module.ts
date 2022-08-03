import { Module } from '@nestjs/common';
import { ScootersReplyContrller } from './scooters-reply.controller';
import { ScootersReplyRepo } from './scooters-reply.repo';
import { ScootersReplyUseCase } from './scooters-reply.ucase';

@Module({
  imports: [],
  providers: [ScootersReplyUseCase, ScootersReplyRepo],
  controllers: [ScootersReplyContrller],
})
export class ScootersReplyModule {}
