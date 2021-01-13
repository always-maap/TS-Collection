interface QueueNode<T> {
  value: T | null;
  next: QueueNode<T> | null;
}

class QueueNode<T> implements QueueNode<T> {
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export interface Queue<T> {
  first: QueueNode<T> | null;
  last: QueueNode<T> | null;
  size: number;
  enqueue(val: T): number;
  dequeue(): T | undefined;
}

export class Queue<T> implements Queue<T> {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val: T): number {
    const newNode = new QueueNode(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last = newNode;
      this.last.next = newNode;
    }
    return ++this.size;
  }

  dequeue(): T | undefined {
    if (!this.first) return undefined;
    let nodeToBeRemove = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return nodeToBeRemove.value!;
  }
}
