const pivot = (arr: Array<number>, start = 0, end = arr.length - 1) => {
  const pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  return swapIndex;
};

/**
 * O(n log n) time
 * @param arr
 * @param left
 * @param right
 */
export const quickSort = (arr: Array<number>, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};
