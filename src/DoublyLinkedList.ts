interface LinkedListNode<T> {
  val: T | null;
  next: LinkedListNode<T> | null;
  prev: LinkedListNode<T> | null;
}

class LinkedListNode<T> {
  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export interface IDoublyLinkedList<T> {
  push(val: T): LinkedListNode<T>;
  pop(): LinkedListNode<T> | undefined;
  shift(): LinkedListNode<T> | undefined;
  unshift(val: T): LinkedListNode<T>;
  get(index: number): LinkedListNode<T> | undefined;
  set(index: number, val: T): boolean;
  insert(index: number, val: T): boolean;
  remove(index: number): LinkedListNode<T> | undefined;
}

export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  private _head: LinkedListNode<T> | null = null;
  private _tail: LinkedListNode<T> | null = null;
  private length = 0;

  push(val: T) {
    const newNode = new LinkedListNode(val);
    if (!this._head) {
      this._head = newNode;
      this._tail = this._head;
    } else {
      this._tail!.next = newNode;
      newNode.prev = this._tail;
      this._tail = newNode;
    }
    this.length++;
    return newNode;
  }

  pop() {
    if (!this._head) return undefined;
    const poppedNode = this._tail!;
    if (this.length === 1) {
      this._head = null;
      this._tail = null;
    } else {
      this._tail = poppedNode.prev;
      this._tail!.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this._head) return undefined;
    const oldHead = this._head;
    if (this.length === 1) {
      this._head = null;
      this._tail = null;
    } else {
      this._head = oldHead.next;
      this._head!.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val: T) {
    const newNode = new LinkedListNode(val);
    if (!this._head) {
      this._head = newNode;
      this._tail = this._head;
    } else {
      this._head.prev = newNode;
      newNode.next = this._head;
      this._head = newNode;
    }
    this.length++;
    return newNode;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    let current: LinkedListNode<T>;
    if (index <= this.length / 2) {
      current = this._head!;
      for (let i = 0; i !== index; i++) {
        current = current.next!;
      }
    } else {
      current = this._tail!;
      for (let i = this.length - 1; i !== index; i--) {
        current = current.prev!;
      }
    }
    return current;
  }

  set(index: number, val: T) {
    const foundNode = this.get(index);
    if (foundNode !== undefined) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index: number, val: T) {
    const newNode = new LinkedListNode(val);
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const beforeNode = this.get(index - 1)!;
    const afterNode = beforeNode.next!;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index)!;
    removedNode.prev!.next = removedNode.next!;
    removedNode.next!.prev = removedNode.prev!;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
