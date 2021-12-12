export interface BSTNode<T> {
  value: T;
  left: BSTNode<T> | null;
  right: BSTNode<T> | null;
}

export class BSTNode<T> implements BSTNode<T> {
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export interface BinarySearchTree<T> {
  root: BSTNode<T> | null;
  insert(value: T): any;
  find(value: T): BSTNode<T> | undefined;
}

export class BinarySearchTree<T> implements BinarySearchTree<T> {
  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new BSTNode<T>(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value!) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value!) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value: T) {
    if (this.root === null) {
      return false;
    }
    let current: BSTNode<T> | null = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value!) {
        current = current.left;
      } else if (value > current.value!) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}
