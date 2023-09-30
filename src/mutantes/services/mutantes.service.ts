import {
  Injectable,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { IsMuntant } from '../helpers/mutantAnalyses.helpers';
import { MutantDto } from '../models/mutantDto';

import { DnaAnalyses } from '../entities/dnaAnalyses.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StatsDto } from '../models/statsDto';

@Injectable()
export class MutantesService {
  constructor(
    @InjectModel(DnaAnalyses.name) private dnaAnalysesModel: Model<DnaAnalyses>,
  ) {}

  async postDnaAnalyses(data: MutantDto): Promise<boolean> {
    try {
      const existingDnaAnalysis = await this.dnaAnalysesModel
        .findOne({ dna: data.dna })
        .exec();

      if (existingDnaAnalysis) {
        if (existingDnaAnalysis.isMutant) {
          return true;
        }

        throw new ForbiddenException('Not a mutant');
      }

      const isMutant = IsMuntant(data);
      const newDnaAnalyses = new this.dnaAnalysesModel({
        dna: data.dna,
        isMutant: isMutant,
      });

      newDnaAnalyses.save();

      if (isMutant) {
        return isMutant;
      }

      throw new ForbiddenException('Not a mutant');
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getStasts(): Promise<StatsDto> {
    try {
      const countMutant = await this.dnaAnalysesModel
        .countDocuments({ isMutant: true })
        .exec();
      const countHuman = await this.dnaAnalysesModel
        .countDocuments({ isMutant: false })
        .exec();

      const statsDto = new StatsDto(countMutant, countHuman);

      return { ...statsDto, ratio: statsDto.ratio };
    } catch (error) {
      console.error(error);
      throw new BadRequestException(error);
    }
  }
}
