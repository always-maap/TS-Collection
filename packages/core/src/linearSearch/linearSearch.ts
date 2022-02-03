import { Comparator, CompareFunction } from '@ts-collection/utils';

/**
 * O(n) time
 */
export const linearSearch = <T>(arr: Array<T>, target: T, compareFunction?: CompareFunction<T>) => {
  const comparator = new Comparator<T>(compareFunction);

  for (let i = 0; i < arr.length; i++) {
    if (comparator.equal(arr[i], target)) return i;
  }
  return -1;
};
