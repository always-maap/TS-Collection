import { Comparator } from '@ts-collection/utils';

export class BinaryTreeNode<T> {
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
  parent: BinaryTreeNode<T> | null;
  value: T | null;
  meta;
  nodeComparator;

  constructor(value: T | null = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;

    this.meta = new Map();

    this.nodeComparator = new Comparator<T>();
  }

  setLeft(node: BinaryTreeNode<T>) {
    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;

    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  setRight(node: BinaryTreeNode<T>) {
    if (this.right) {
      this.right.parent = null;
    }

    this.right = node;

    if (this.right) {
      this.right.parent = this;
    }

    return this;
  }

  traverse() {
    let nodes: string[] = [];

    if (this.left) {
      nodes = nodes.concat(this.left.traverse());
    }

    nodes.push(String(this.value));

    if (this.right) {
      nodes = nodes.concat(this.right.traverse());
    }

    return nodes;
  }

  toString() {
    return this.traverse().toString();
  }
}
