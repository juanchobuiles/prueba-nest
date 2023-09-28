import { Test, TestingModule } from '@nestjs/testing';
import { MutantesController } from './mutantes.controller';

describe('MutantesController', () => {
  let controller: MutantesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MutantesController],
    }).compile();

    controller = module.get<MutantesController>(MutantesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
