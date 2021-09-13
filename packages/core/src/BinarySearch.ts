/**
 * time complexity: O(log n) - space complexity: O(1)
 *
 * Binary Search only works with sorted array.
 */
export const binarySearch = <T>(arr: Array<T>, target: T) => {
  let start = 0,
    end = arr.length - 1,
    middle = Math.floor((start + end) / 2);
  while (arr[middle] !== target && start <= end) {
    if (arr[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === target ? middle : -1;
};
