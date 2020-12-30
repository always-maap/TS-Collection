const mergeArray = (arr1: Array<number>, arr2: Array<number>) => {
  const mergedArray = [];
  let arr1Index = 0;
  let arr2Index = 0;
  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr2[arr2Index] > arr1[arr1Index]) {
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
 * O(n log n)
 * @param arr
 */
export const mergeSort = (arr: Array<number>): Array<number> => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return mergeArray(left, right);
};
