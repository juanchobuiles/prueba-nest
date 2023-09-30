export class StatsDto {
  readonly countMutantDna: number;
  readonly countHumanDna: number;

  constructor(countMutantDna: number, countHumanDna: number) {
    this.countMutantDna = countMutantDna;
    this.countHumanDna = countHumanDna;
  }

  get ratio(): number {
    if (this.countHumanDna === 0) {
      return 0;
    }

    return this.countMutantDna / this.countHumanDna;
  }
}
