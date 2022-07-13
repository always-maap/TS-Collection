import { LinkedList } from '../linkedList';

export class Stack<T> {
  constructor(public list: LinkedList<T> = new LinkedList<T>()) {}

  push(val: T) {
    this.list.pushBack(val);
  }

  pop() {
    const removedNode = this.list.popBack();
    return removedNode ? removedNode.value : null;
  }

  size() {
    return this.list.size();
  }

  toString(callback?: (val: T) => string) {
    return this.list.toString(callback);
  }
}
