import { Comparator, CompareFunction } from '@ts-collection/utils';

const mergeArray = <T>(arr1: Array<T>, arr2: Array<T>, compareFunction?: CompareFunction<T>) => {
  const comparator = new Comparator<T>(compareFunction);

  const mergedArray = [];
  let arr1Index = 0;
  let arr2Index = 0;
  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (comparator.greaterThan(arr2[arr2Index], arr1[arr1Index])) {
      mergedArray.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      mergedArray.push(arr2[arr2Index]);
      arr2Index++;
    }
  }
  while (arr1Index < arr1.length) {
    mergedArray.push(arr1[arr1Index]);
    arr1Index++;
  }
  while (arr2Index < arr2.length) {
    mergedArray.push(arr2[arr2Index]);
    arr2Index++;
  }
  return mergedArray;
};

/**
 * O(n log n) time
 * @param arr
 */
export const mergeSort = <T>(arr: Array<T>, compareFunction?: CompareFunction<T>): Array<T> => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort<T>(arr.slice(0, mid), compareFunction);
  const right = mergeSort<T>(arr.slice(mid), compareFunction);
  return mergeArray(left, right);
};
