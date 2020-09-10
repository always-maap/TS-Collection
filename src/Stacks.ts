interface StackNode<T> {
  value: T | null;
  next: StackNode<T> | null;
}

class StackNode<T> implements StackNode<T> {
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export interface Stack<T> {
  first: StackNode<T> | null;
  last: StackNode<T> | null;
  size: number;
  push(val: T): number;
  pop(): T | null;
}

export class Stack<T> implements Stack<T> {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val: T): number {
    const newNode = new StackNode(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const currentFirst = this.first;
      this.first = newNode;
      this.first.next = currentFirst;
    }
    return ++this.size;
  }

  pop(): T | null {
    if (this.size === 0) {
      return null;
    }
    const nodeToBeRemove = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first!.next;
    this.size--;
    return nodeToBeRemove!.value;
  }
}
