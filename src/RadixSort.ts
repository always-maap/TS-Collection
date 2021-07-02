const getDigit = (num: number, place: number) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const digitCount = (num: number) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums: number[]) => {
  let maxDigit = 0;
  for (const num of nums) {
    maxDigit = Math.max(maxDigit, digitCount(num));
  }
  return maxDigit;
};

export const radixSort = (nums: number[]) => {
  const maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    const buckets: number[][] = Array.from({ length: 10 }, () => []);
    for (const num of nums) {
      const digit = getDigit(num, k);
      buckets[digit].push(num);
    }
    nums = ([] as number[]).concat(...buckets);
  }
  return nums;
};
