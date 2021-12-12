import { selectionSort } from '../src';

describe('Basic functionality', () => {
  it('sort the unsorted arr', () => {
    const arr = [5, 3, 7, 1, 0];
    expect(selectionSort(arr)).toEqual([0, 1, 3, 5, 7]);
  });

  it('sort the unsorted arr with duplicate inputs', () => {
    const arr = [-1, -1, 0, 5, 12];
    expect(selectionSort(arr)).toEqual([-1, -1, 0, 5, 12]);
  });
});

describe('bad inputs', () => {
  it('return empty arr when arr is empty', () => {
    expect(selectionSort([])).toEqual([]);
  });

  it('return same arr whenever arr in sorted', () => {
    const arr = [-5, -2, 0, 2, 5];
    expect(selectionSort(arr)).toEqual([-5, -2, 0, 2, 5]);
  });

  it('return same item whenever arr length is 1', () => {
    expect(selectionSort([1])).toEqual([1]);
  });
});
