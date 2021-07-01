interface IBinaryHeap<T> {
  values: T[];
  insert(element: T): void;
  extractMax(): void;
}

export class MaxBinaryHeap<T> implements IBinaryHeap<T> {
  values: T[] = [];

  insert(element: T) {
    this.values.push(element);
    this.bubbleUp();
  }

  extractMax() {
    const max = this.values[0];
    if (this.values.length > 0) {
      this.values[0] = this.values.pop() as T;
      this.sinkDown();
    }
    return max;
  }

  private bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (element <= parent) break;
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

      let leftChild: number | T, rightChild: number | T;
      let swap: null | number = null;

      if (leftChildIdx < this.values.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild!)) {
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
