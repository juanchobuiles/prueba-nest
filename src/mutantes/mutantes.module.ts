import { Module } from '@nestjs/common';
import { MutantesController } from './controllers/mutantes.controller';
import { MutantesService } from './services/mutantes.service';

@Module({
  controllers: [MutantesController],
  providers: [MutantesService],
})
export class MutantesModule {}
