/**
 * O(n) time
 * @param arr
 * @param target
 * @constructor
 */
export const linearSearch = <T>(arr: Array<T>, target: T) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};
