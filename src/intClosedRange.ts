export class IntClosedRange {
  lower: number;
  upper: number;

  constructor(lower: number, upper: number) {
    this.lower = lower;
    this.upper = upper;
  }

  getLower(): number {
    return this.lower;
  }

  getUpper(): number {
    return this.upper;
  }

  notation(): string {
    return `[${this.lower},${this.upper}]`;
  }

  includes(value: number): boolean {
    return (this.lower <= value) && (value <= this.upper);
  }
}
