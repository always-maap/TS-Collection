import { Comparator, CompareFunction } from '@ts-collection/utils';
import { BinarySearchTreeNode } from './BinarySearchTreeNode';

export class BinarySearchTree<T> {
  root: BinarySearchTreeNode<T> | null;
  nodeComparator: Comparator<T>;

  constructor(compareFunction?: CompareFunction<T | null>) {
    this.root = new BinarySearchTreeNode<T>(null, compareFunction);

    this.nodeComparator = this.root.nodeComparator;
  }

  insert(value: T) {
    return this.root?.insert(value);
  }

  find(value: T) {
    return this.root?.find(value);
  }

  toString() {
    return this.root?.toString();
  }
}
