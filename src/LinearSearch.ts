/**
 * O(n) time
 * @param arr
 * @param val
 * @constructor
 */
export const LinearSearch = <T>(arr: Array<T>, val: T) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};
