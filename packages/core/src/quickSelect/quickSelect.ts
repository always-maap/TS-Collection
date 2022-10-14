function quickSelect(arr: number[], k: number, left = 0, right = arr.length - 1): number {
  const pivot = arr[right];
  let p = left;

  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      [arr[i], arr[p]] = [arr[p], arr[i]];
      p++;
    }
  }

  [arr[p], arr[right]] = [arr[right], arr[p]];

  if (p === k) {
    return arr[p];
  }

  if (p > k) {
    return quickSelect(arr, k, left, p - 1);
  } else {
    return quickSelect(arr, k, p + 1, right);
  }
}

export function kthLargest(arr: number[], k: number): number {
  return quickSelect(arr, arr.length - k);
}

export function kthSmallest(arr: number[], k: number): number {
  return quickSelect(arr, k - 1);
}
