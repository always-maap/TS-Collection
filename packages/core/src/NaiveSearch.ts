/**
 * O(m * n) time
 * @param str
 * @param pattern
 */
export const naiveSearch = (str: string, pattern: string) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[j] !== pattern[i + j]) break;
      if (j === pattern.length - 1) count++;
    }
  }
  return count;
};
