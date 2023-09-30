import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MutantesModule } from './mutantes/mutantes.module';
import { DatabaseModule } from './db/database.module';
import config from './config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
    }),
    DatabaseModule,
    MutantesModule,
  ],
})
export class AppModule {}
