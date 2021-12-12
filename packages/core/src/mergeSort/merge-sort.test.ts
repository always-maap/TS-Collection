import { mergeSort } from './mergeSort';

describe('Basic functionality', () => {
  it('sort number array', () => {
    const sortedArr = mergeSort([23, 345, 5467, 12, 2345, 9852]);
    expect(sortedArr).toEqual([12, 23, 345, 2345, 5467, 9852]);
  });
});

describe('Bad inputs', () => {
  it('array with one element should return itself', () => {
    const sortedArr = mergeSort([0]);
    expect(sortedArr).toEqual([0]);
  });

  it('array with all elements the same should return itself', () => {
    const sortedArr = mergeSort([2, 2, 2, 2]);
    expect(sortedArr).toEqual([2, 2, 2, 2]);
  });
});
