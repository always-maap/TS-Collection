import { MaxBinaryHeap } from '../MaxBinaryHeap';

describe('Basic functionality', () => {
  it('insertion heap', () => {
    const heap = new MaxBinaryHeap<number>();
    // heap insertion
    [41, 39, 33, 18, 27, 12, 55].forEach((num) => heap.insert(num));
    // expectation
    expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33]);
  });

  it('extract max from heap', () => {
    const heap = new MaxBinaryHeap<number>();
    // heap insertion
    [41, 39, 33, 18, 27, 12].forEach((num) => heap.insert(num));

    const extractedMax = heap.extractMax();
    // expectation
    expect(heap.values).toEqual([39, 27, 33, 18, 12]);
    expect(extractedMax).toEqual(41);
  });

  it('extract max from heap', () => {
    const heap = new MaxBinaryHeap<number>();
    // heap insertion
    [41, 39, 33, 18, 27, 35].forEach((num) => heap.insert(num));

    const extractedMax = heap.extractMax();
    // expectation
    expect(heap.values).toEqual([39, 33, 35, 18, 27]);
    expect(extractedMax).toEqual(41);
  });
});

describe('falsy operations', () => {
  it('extract max from an empty heap should return undefined', () => {
    const heap = new MaxBinaryHeap<number>();
    // expectation
    expect(heap.extractMax()).toEqual(undefined);
  });
});
