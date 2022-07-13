import { LinkedList } from '../linkedList';

export class Queue<T> implements Queue<T> {
  constructor(public list: LinkedList<T> = new LinkedList<T>()) {}

  enqueue(val: T) {
    this.list.pushBack(val);
  }

  dequeue() {
    const removeHead = this.list.popBack();
    return removeHead ? removeHead.value : null;
  }

  size() {
    return this.list.size();
  }

  toString(callback?: (val: T) => string) {
    return this.list.toString(callback);
  }
}
