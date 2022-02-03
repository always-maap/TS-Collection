import { Comparator, CompareFunction } from '@ts-collection/utils';

/**
 * time complexity: O(log n) - space complexity: O(1)
 */
export const binarySearch = <T>(arr: Array<T>, target: T, compareFunction?: CompareFunction<T>) => {
  const comparator = new Comparator<T>(compareFunction);

  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (comparator.equal(arr[middle], target)) {
      return middle;
    }

    if (comparator.greaterThan(arr[middle], target)) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
};
