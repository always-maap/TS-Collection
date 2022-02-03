import { Comparator, CompareFunction } from '@ts-collection/utils';

const pivot = <T>(arr: Array<T>, start = 0, end = arr.length - 1, compareFunction?: CompareFunction<T>) => {
  const comparator = new Comparator<T>(compareFunction);

  const pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (comparator.greaterThan(pivot, arr[i])) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  return swapIndex;
};

/**
 * O(n log n) time
 */
export const quickSort = <T>(
  arr: Array<T>,
  left = 0,
  right = arr.length - 1,
  compareFunction?: CompareFunction<T>
) => {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right, compareFunction);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};
