---
id: binarySearch
title: binarySearch()
---

Binary Search in Top-Bottom algorithm.

## Details

repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

## Visualizer

## Code

```ts
// Recursive implementation
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
```

## Analysis

| Worst Time Complexity | Average Time Complexity | Best Time Complexity | Space Complexity |
| --------------------- | ----------------------- | -------------------- | ---------------- |
| O(log n )             | O(log n)                | O(1)                 | O(1)             |

## Questions

- [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
- [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
- [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
- [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
- [Binary Search](https://leetcode.com/problems/binary-search/)
