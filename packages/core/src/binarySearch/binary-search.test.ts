import { binarySearch } from './binarySearch';

describe('Basic functionality', () => {
  it('search at the beginning of the array', () => {
    const arr = [0, 1, 3, 5, 7];
    expect(binarySearch(arr, 0)).toEqual(0);
  });

  it('finding in sorted string[] should work', () => {
    expect(binarySearch(['alireza', 'kiarash', 'mahdi', 'mohammad'], 'mohammad')).toEqual(3);
  });

  it('search at the end of the array', () => {
    const arr = [0, 1, 3, 5, 7];
    expect(binarySearch(arr, 3)).toEqual(2);
  });
});

describe('sad tests', () => {
  it('return -1 for searching for element that does not exists in the array', () => {
    expect(binarySearch([0, 1, 3, 5, 7], 100)).toEqual(-1);
  });
});
