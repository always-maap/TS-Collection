import { BinarySearchTree, BSTNode } from './BinarySearchTree';

export interface IDepthFirstSearch<T> {
  preOrder(): Array<T>;
  postOrder(): Array<T>;
  inOrder(): Array<T>;
}

export class DepthFirstSearch<T> extends BinarySearchTree<T> implements IDepthFirstSearch<T> {
  preOrder() {
    const data: Array<T> = [];
    const traverse = (node: BSTNode<T> | null) => {
      if (node === null) return;
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return data;
  }

  postOrder() {
    const data: Array<T> = [];
    const traverse = (node: BSTNode<T> | null) => {
      if (node === null) return;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };
    traverse(this.root);
    return data;
  }

  inOrder() {
    const data: Array<T> = [];
    const traverse = (node: BSTNode<T> | null) => {
      if (node === null) return;
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return data;
  }
}
