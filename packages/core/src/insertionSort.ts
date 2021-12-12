/**
 * O(n ^ 2) time
 * @param arr
 */
export const insertionSort = (arr: Array<number>) => {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    for (j = i - 1; j >= 0 && key < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
  return arr;
};
