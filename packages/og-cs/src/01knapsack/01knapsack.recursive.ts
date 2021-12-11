export const knapsackRecursive = (
  profits: Array<number>,
  weights: Array<number>,
  capacity: number,
  currentIndex = profits.length
): number => {
  if (capacity === 0 || currentIndex === 0) return 0;

  if (weights[currentIndex - 1] > capacity) {
    return knapsackRecursive(profits, weights, capacity, currentIndex - 1);
  } else {
    const profit1 = knapsackRecursive(profits, weights, capacity, currentIndex - 1);
    const profit2 =
      profits[currentIndex - 1] +
      knapsackRecursive(profits, weights, capacity - weights[currentIndex - 1], currentIndex - 1);

    return Math.max(profit1, profit2);
  }
};
