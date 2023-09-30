import { Body, Controller, Get, Post } from '@nestjs/common';
import { MutantDto } from '../models/mutantDto';
import { MutantesService } from '../services/mutantes.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Mutants')
@Controller('api/mutant')
export class MutantesController {
  constructor(private mutanteService: MutantesService) {}
  @Post()
  PostMutant(@Body() Body: MutantDto) {
    const result = this.mutanteService.postDnaAnalyses(Body);
    return result;
  }
  @Get('stats')
  getStats() {
    const stats = this.mutanteService.getStasts();
    return stats;
  }
}
