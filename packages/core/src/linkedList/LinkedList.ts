import { Comparator, CompareFunction } from '@ts-collection/utils';
import { LinkedListNode } from './ListListNode';

export class LinkedList<T> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  compare: Comparator<T>;
  length: number;

  constructor(compareFunction?: CompareFunction<T>) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator<T>(compareFunction);
    this.length = 0;
  }

  pushBack(val: T) {
    const newNode = new LinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  popBack() {
    if (!this.head) return null;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  popFront() {
    if (!this.head) return null;
    const currentHead = this.head.next;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  pushFront(val: T) {
    const newNode = new LinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.head = this.tail;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return newNode;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let current = this.head;
      for (let i = 0; i !== index; i++) {
        current = current!.next;
      }
      return current;
    }
  }

  set(index: number, val: T) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }

  insert(index: number, val: T) {
    const newNode = new LinkedListNode(val);
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.pushFront(val);
    if (index === this.length) return !!this.pushBack(val);
    const previousNode = this.get(index - 1);
    const temp = previousNode!.next;
    previousNode!.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index: number) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return this.popFront();
    }
    if (index === this.length) {
      return this.popBack();
    }
    const previousNode = this.get(index - 1);
    const removed = previousNode!.next;
    previousNode!.next = removed!.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node!.next;
      node!.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  toArray() {
    const nodes = [];

    let current = this.head;
    while (current) {
      nodes.push(current.value);
      current = current.next;
    }

    return nodes;
  }

  toString(callback?: (val: T) => string) {
    return this.toArray()
      .map((node) => (callback ? callback(node) : node))
      .join(', ');
  }
}
