import { Module } from '@nestjs/common';
import { AppModule } from 'src/core/app/app.module';
import { ScootersModule } from 'src/core/scooters/scooters.module';
import { OrmModule } from 'src/infrastructures/orm/orm.module';

@Module({
  imports: [AppModule, OrmModule, ScootersModule],
})
export class ServerRootModule {}
