/**
 * O(n ^ 2) time
 * @param arr
 */
export const bubbleSort = (arr: Array<number>) => {
  let noSwaps = false;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      noSwaps = true;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};
