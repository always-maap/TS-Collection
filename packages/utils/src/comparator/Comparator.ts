export class Comparator<T = string | number> {
  compare: (a: T, b: T) => 0 | 1 | -1 = this.defaultCompareFunction;

  constructor(compareFunction?: (a: T, b: T) => 0 | 1 | -1) {
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
