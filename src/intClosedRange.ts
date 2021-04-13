/**
 * 整数閉区間クラス - IntClosedRange
 */
export class IntClosedRange {
  /** 下端点 */
  lower: number;
  /** 上端点 */
  upper: number;

  /**
   * 
   * @param lower 下端点の値
   * @param upper 上端点の値
   */
  constructor(lower: number, upper: number) {
    this.lower = lower;
    this.upper = upper;
  }

  /**
   * 下端点を返す
   * @returns 下端点の値
   */
  getLower(): number {
    return this.lower;
  }

  /**
   * 上端点を返す
   * @returns 上端点の値
   */
  getUpper(): number {
    return this.upper;
  }

  /**
   * 文字列表現を返す
   * @returns 整数閉区間の文字列表現。"[lower,upper]"形式
   */
  notation(): string {
    return `[${this.lower},${this.upper}]`;
  }

  /**
   * 指定した値を含むかどうかを判定する
   */
  includes(value: number): boolean {
    return (this.lower <= value) && (value <= this.upper);
  }
}
