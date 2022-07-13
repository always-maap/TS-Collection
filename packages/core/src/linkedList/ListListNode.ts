export class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;

  constructor(value: T, next = null) {
    this.value = value;
    this.next = next;
  }
}
