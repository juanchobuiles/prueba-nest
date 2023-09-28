import { Injectable, ForbiddenException } from '@nestjs/common';
import { MutantDto } from '../models/mutantDto';

@Injectable()
export class MutantesService {
  isMutant(data: MutantDto): boolean {
    const numRows = data.dna.length;
    const numCols = data.dna[0].length;

    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [-1, 1],
    ];

    function isValidSequence(sequence: string): boolean {
      const regex = /(A{4}|T{4}|C{4}|G{4})/;
      return regex.test(sequence);
    }

    function checkDirection(
      x: number,
      y: number,
      dx: number,
      dy: number,
    ): boolean {
      let sequence = '';
      for (let i = 0; i < 4; i++) {
        const newX = x + i * dx;
        const newY = y + i * dy;
        if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols) {
          sequence += data.dna[newX][newY];
        } else {
          break;
        }
      }
      return isValidSequence(sequence);
    }

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        for (const [dx, dy] of directions) {
          if (checkDirection(row, col, dx, dy)) {
            return true;
          }
        }
      }
    }

    throw new ForbiddenException('Not a mutant');
  }
}
