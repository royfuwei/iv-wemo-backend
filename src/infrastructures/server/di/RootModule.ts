import { Module } from '@nestjs/common';
import { AppModule } from 'src/core/app/app.module';
import { OrmModule } from 'src/infrastructures/orm/orm.module';

@Module({
  imports: [AppModule, OrmModule],
})
export class ServerRootModule {}
