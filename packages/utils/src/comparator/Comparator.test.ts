import { Comparator } from './Comparator';

describe('Comparator', () => {
  it('should compare with default comparator function', () => {
    const comparator = new Comparator<number>();

    expect(comparator.equal(0, 0)).toBe(true);
    expect(comparator.equal(0, 1)).toBe(false);
    expect(comparator.lessThan(1, 2)).toBe(true);
    expect(comparator.lessThan(-1, 2)).toBe(true);
    expect(comparator.lessThan(10, 2)).toBe(false);
    expect(comparator.lessThanOrEqual(10, 2)).toBe(false);
    expect(comparator.lessThanOrEqual(1, 1)).toBe(true);
    expect(comparator.lessThanOrEqual(0, 0)).toBe(true);
    expect(comparator.greaterThan(0, 0)).toBe(false);
    expect(comparator.greaterThan(10, 0)).toBe(true);
    expect(comparator.greaterThanOrEqual(10, 0)).toBe(true);
    expect(comparator.greaterThanOrEqual(10, 10)).toBe(true);
    expect(comparator.greaterThanOrEqual(0, 10)).toBe(false);
  });

  it('should compare with default comparator function', () => {
    const comparator = new Comparator<string>();

    expect(comparator.equal('a', 'a')).toBe(true);
    expect(comparator.lessThan('a', 'b')).toBe(true);
    expect(comparator.lessThan('a', 'ab')).toBe(true);
  });

  it('should compare with custom comparator function', () => {
    const comparator = new Comparator<string>((a, b) => {
      if (a.length === b.length) {
        return 0;
      }

      return a.length < b.length ? -1 : 1;
    });

    expect(comparator.equal('a', 'b')).toBe(true);
    expect(comparator.equal('a', '')).toBe(false);
    expect(comparator.lessThan('b', 'aa')).toBe(true);
    expect(comparator.greaterThanOrEqual('a', 'aa')).toBe(false);
    expect(comparator.greaterThanOrEqual('aa', 'a')).toBe(true);
    expect(comparator.greaterThanOrEqual('a', 'a')).toBe(true);
  });

  it('should compare with custom comparator function for object', () => {
    interface Person {
      name: string;
      age: number;
    }

    const comparator = new Comparator<Person>((a, b) => {
      if (a.age === b.age) {
        return 0;
      }

      return a.age < b.age ? -1 : 1;
    });

    const person1 = { name: 'person1', age: 1 };
    const person2 = { name: 'person2', age: 2 };

    expect(comparator.lessThan(person1, person2)).toBe(true);
  });
});
