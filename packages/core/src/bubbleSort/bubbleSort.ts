import { Comparator, CompareFunction } from '@ts-collection/utils';

/**
 * O(n ^ 2) time
 */
export const bubbleSort = <T = number>(arr: Array<T>, compareFunction?: CompareFunction<T>) => {
  const comparator = new Comparator<T>(compareFunction);
  let noSwaps = false;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      noSwaps = true;
      if (comparator.greaterThan(arr[j], arr[j + 1])) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};
