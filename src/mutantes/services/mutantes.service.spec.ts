import { Test, TestingModule } from '@nestjs/testing';
import { MutantesService } from './mutantes.service';

describe('MutantesService', () => {
  let service: MutantesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MutantesService],
    }).compile();

    service = module.get<MutantesService>(MutantesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
