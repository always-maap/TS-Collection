import { Comparator, CompareFunction } from '@ts-collection/utils';

/**
 * O(n ^ 2) time
 */
export const insertionSort = <T = number>(arr: Array<T>, compareFunction?: CompareFunction<T>) => {
  const comparator = new Comparator<T>(compareFunction);

  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    for (j = i - 1; j >= 0 && comparator.lessThan(key, arr[j]); j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
  return arr;
};
