interface IPriorityQueueNode<T> {
  val: T;
  priority: number;
}

export class PriorityQueueNode<T> implements IPriorityQueueNode<T> {
  val: T;
  priority: number;

  constructor(val: T, priority: number) {
    this.val = val;
    this.priority = priority;
  }
}

interface IPriorityQueue<T> {
  values: PriorityQueueNode<T>[];
  enqueue(val: PriorityQueueNode<T>['val'], priority: number): void;
  dequeue(): void;
}

export class PriorityQueue<T> implements IPriorityQueue<T> {
  values: PriorityQueueNode<T>[] = [];

  enqueue(val: PriorityQueueNode<T>['val'], priority: number) {
    const newNode = new PriorityQueueNode(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    const min = this.values[0];
    if (this.values.length > 0) {
      this.values[0] = this.values.pop() as PriorityQueueNode<T>;
      this.sinkDown();
    }
    return min;
  }

  private bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  private sinkDown() {
    let idx = 0;
    const element = this.values[0];

    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;

      let leftChild: PriorityQueueNode<T>, rightChild: PriorityQueueNode<T>;
      let swap: null | number = null;

      if (leftChildIdx < this.values.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild!.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
