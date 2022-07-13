import { Queue } from './Queue';

describe('Basic functionality', () => {
  it('should create an empty queue', () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
    expect(queue.list.length).toBe(0);
  });

  it('should enqueue', () => {
    const queue = new Queue<number>();
    queue.enqueue(8);
    queue.enqueue(3);
    queue.enqueue(10);

    expect(queue.list.length).toBe(3);
    expect(queue.toString()).toBe('8, 3, 10');
  });

  it('enqueue and then dequeue should return that item', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
  });
});

describe('falsy operations', () => {
  it('dequeue from empty queue should result undefined', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBe(null);
  });
});
