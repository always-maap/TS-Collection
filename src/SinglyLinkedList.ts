interface LinkedListNode<T> {
  val: T | null;
  next: LinkedListNode<T> | null;
}

class LinkedListNode<T> implements LinkedListNode<T> {
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export interface SinglyLinkedList<T> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  length: number;
  push(val: T): LinkedListNode<T>;
  pop(): LinkedListNode<T>;
  shift(): LinkedListNode<T>;
  unshift(val: T): LinkedListNode<T>;
  get(index: number): LinkedListNode<T> | null;
  set(index: number, val: T): boolean;
  insert(index: number, val: T): boolean;
  remove(index: number): LinkedListNode<T>;
  reverse(): SinglyLinkedList<T>;
}

export class SinglyLinkedList<T> implements SinglyLinkedList<T> {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: T) {
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

  pop() {
    if (!this.head) return undefined;
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

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head.next;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val: T) {
    const newNode = new LinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.head = this.tail;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
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
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index: number, val: T) {
    const newNode = new LinkedListNode(val);
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const previousNode = this.get(index - 1);
    const temp = previousNode!.next;
    previousNode!.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index: number) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
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
}
