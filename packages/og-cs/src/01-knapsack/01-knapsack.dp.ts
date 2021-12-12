export const knapsackDp = (profits: Array<number>, weights: Array<number>, capacity: number): number => {
  const memo: { [key: string]: number } = {};

  const knapsackRecursive = (
    profits: Array<number>,
    weights: Array<number>,
    capacity: number,
    currentIndex: number
  ): number => {
    if (capacity === 0 || currentIndex === 0) return 0;

    const key = `${currentIndex - 1}-${capacity}`;
    if (key in memo) {
      return memo[key];
    }

    if (weights[currentIndex - 1] > capacity) {
      return knapsackRecursive(profits, weights, capacity, currentIndex - 1);
    } else {
      const profit1 = knapsackRecursive(profits, weights, capacity, currentIndex - 1);
      const profit2 =
        profits[currentIndex - 1] +
        knapsackRecursive(profits, weights, capacity - weights[currentIndex - 1], currentIndex - 1);

      const result = Math.max(profit1, profit2);
      memo[key] = result;
      return result;
    }
  };

  return knapsackRecursive(profits, weights, capacity, profits.length);
};
