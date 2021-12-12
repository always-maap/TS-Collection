import { radixSort } from './radixSort';

describe('Basic functionality', () => {
  it('sort number array', () => {
    const sortedArr = radixSort([23, 345, 5467, 12, 2345, 9852]);
    expect(sortedArr).toEqual([12, 23, 345, 2345, 5467, 9852]);
  });
});

describe('Bad inputs', () => {
  it('array with one element should return itself', () => {
    const sortedArr = radixSort([0]);
    expect(sortedArr).toEqual([0]);
  });

  it('array with all elements the same should return itself', () => {
    const sortedArr = radixSort([2, 2, 2, 2]);
    expect(sortedArr).toEqual([2, 2, 2, 2]);
  });
});
