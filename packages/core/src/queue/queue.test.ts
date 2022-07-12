import { Queue } from './Queue';

describe('Basic functionality', () => {
  it('should enqueue', () => {
    const queue = new Queue<number>();
    queue.enqueue(8);
    queue.enqueue(3);
    queue.enqueue(10);

    console.log(queue);

    expect(queue.size).toBe(3);
    expect(queue.dequeue()).toBe(8);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(10);
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
