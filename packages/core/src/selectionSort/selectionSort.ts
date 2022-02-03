import { Comparator, CompareFunction } from '@ts-collection/utils';

/**
 * O(n ^ 2) time
 */
export const selectionSort = <T>(arr: Array<T>, compareFunction?: CompareFunction<T>) => {
  const comparator = new Comparator<T>(compareFunction);

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator.lessThan(arr[j], arr[min])) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
};
