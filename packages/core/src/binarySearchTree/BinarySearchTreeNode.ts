import { Comparator, CompareFunction } from '@ts-collection/utils';
import { BinaryTreeNode } from '../tree';

export class BinarySearchTreeNode<T> extends BinaryTreeNode<T> {
  left!: BinarySearchTreeNode<T> | null;
  right!: BinarySearchTreeNode<T> | null;
  nodeValueCmparator: Comparator<T | null>;

  constructor(value: T | null = null, compareFunction?: CompareFunction<T | null>) {
    super(value);

    this.nodeValueCmparator = new Comparator<T | null>(compareFunction);
  }

  insert(value: T) {
    if (this.nodeValueCmparator.equal(this.value, null)) {
      this.value = value;
      return this;
    }

    if (this.nodeValueCmparator.lessThan(value, this.value)) {
      if (this.left) {
        this.left.insert(value);
      } else {
        const newNode = new BinarySearchTreeNode<T>(value);
        this.setLeft(newNode);
        return newNode;
      }
    }

    if (this.nodeValueCmparator.greaterThan(value, this.value)) {
      if (this.right) {
        this.right.insert(value);
      } else {
        const newNode = new BinarySearchTreeNode<T>(value);
        this.setRight(newNode);
        return newNode;
      }
    }

    return this;
  }

  find(value: T): BinarySearchTreeNode<T> | null {
    if (this.nodeValueCmparator.equal(this.value, value)) {
      return this;
    }

    if (this.nodeValueCmparator.lessThan(value, this.value)) {
      if (this.left) {
        return this.left.find(value);
      }
    }

    if (this.nodeValueCmparator.greaterThan(value, this.value)) {
      if (this.right) {
        return this.right.find(value);
      }
    }

    return null;
  }
}
