import { Comparator, CompareFunction } from '@ts-collection/utils';

/**
 * O(n ^ 2) time
 */
export const shellSort = <T>(arr: Array<T>, compareFunction?: CompareFunction<T>) => {
  const comparator = new Comparator<T>(compareFunction);

  for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < arr.length; i++) {
      const temp = arr[i];
      let j;
      for (j = i; j >= gap && comparator.greaterThan(arr[j - gap], temp); j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }
  return arr;
};
