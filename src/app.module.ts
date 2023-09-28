import { Module } from '@nestjs/common';
import { MutantesModule } from './mutantes/mutantes.module';

@Module({
  imports: [MutantesModule],
})
export class AppModule {}
