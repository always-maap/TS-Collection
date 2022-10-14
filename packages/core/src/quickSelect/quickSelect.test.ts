import { kthLargest, kthSmallest } from './quickSelect';

describe('quickSelect', () => {
  it('returns the kth largest element', () => {
    const arr = [3, 2, 1, 5, 6, 4];
    expect(kthLargest(arr, 2)).toBe(5);
  });

  it('returns the kth smallest element with duplicate inputs', () => {
    const arr = [-1, -1, 0, 5, 12];
    expect(kthSmallest(arr, 3)).toEqual(0);
  });
});
