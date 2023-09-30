import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MutantesController } from './controllers/mutantes.controller';
import { MutantesService } from './services/mutantes.service';
import { DnaAnalyses, DnaAnalysesSchema } from './entities/dnaAnalyses.entity';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DnaAnalyses.name,
        schema: DnaAnalysesSchema,
      },
    ]),
  ],
  controllers: [MutantesController],
  providers: [MutantesService],
})
export class MutantesModule {}
