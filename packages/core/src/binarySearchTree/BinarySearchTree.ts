export interface IBSTNode<T> {
  value: T;
  left: BSTNode<T> | null;
  right: BSTNode<T> | null;
}

export class BSTNode<T> implements IBSTNode<T> {
  value: IBSTNode<T>['value'];
  left: IBSTNode<T>['left'];
  right: IBSTNode<T>['right'];

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export interface IBinarySearchTree<T> {
  root: BSTNode<T> | null;
  insert(value: T): any;
  find(value: T): BSTNode<T> | null;
}

export class BinarySearchTree<T> implements IBinarySearchTree<T> {
  root: IBinarySearchTree<T>['root'];

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
      return null;
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
    if (!found) {
      return null;
    }
    return current;
  }
}
