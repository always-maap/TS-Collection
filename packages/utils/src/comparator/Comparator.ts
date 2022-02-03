export type CompareFunction<T> = (a: T, b: T) => 0 | 1 | -1;

export class Comparator<T = string | number> {
  compare: CompareFunction<T> = this.defaultCompareFunction;

  constructor(compareFunction?: CompareFunction<T>) {
    this.compare = compareFunction || this.defaultCompareFunction;
  }

  defaultCompareFunction(a: T, b: T) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  equal(a: T, b: T) {
    return this.compare(a, b) === 0;
  }

  lessThan(a: T, b: T) {
    return this.compare(a, b) < 0;
  }

  greaterThan(a: T, b: T) {
    return this.compare(a, b) > 0;
  }

  lessThanOrEqual(a: T, b: T) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  greaterThanOrEqual(a: T, b: T) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }
}
