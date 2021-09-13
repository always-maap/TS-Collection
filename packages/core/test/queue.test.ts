import { Queue } from '../src';

describe('Basic functionality', () => {
  it('enqueue one item to queue should return 1', () => {
    const queue = new Queue<number>();
    expect(queue.enqueue(1)).toBe(1);
  });

  it('enqueue two item to queue should return 2', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    expect(queue.enqueue(5)).toBe(2);
  });

  it('enqueue and then dequeue should return that item', () => {
    const queue = new Queue<number>();
    const val = queue.enqueue(1);
    expect(queue.dequeue()).toBe(val);
  });
});

describe('falsy operations', () => {
  it('dequeue from empty queue should result undefined', () => {
    const queue = new Queue<any>();
    expect(queue.dequeue()).toBe(undefined);
  });

  it('first item of empty queue should be null', () => {
    const queue = new Queue<any>();
    expect(queue.first).toBe(null);
  });
});
