import { shellSort } from '../src';

describe('Basic functionality', () => {
  it('sort number array', () => {
    const sortedArr = shellSort([7, 6, 8, 9, 3, 2, 10, 5, 1]);
    expect(sortedArr).toEqual([1, 2, 3, 5, 6, 7, 8, 9, 10]);
  });
});
