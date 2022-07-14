import { BinaryTreeNode } from '../tree';

export function depthFirstSearchPreOrder<T>(root: BinaryTreeNode<T>) {
  const data: Array<T | null> = [];

  const traverse = (node: BinaryTreeNode<T> | null) => {
    if (node === null) {
      return;
    }

    data.push(node.value);

    if (node.left) {
      traverse(node.left);
    }

    if (node.right) {
      traverse(node.right);
    }
  };

  traverse(root);

  return data;
}

export function depthFirstSearchPostOrder<T>(root: BinaryTreeNode<T>) {
  const data: Array<T | null> = [];

  const traverse = (node: BinaryTreeNode<T> | null) => {
    if (node === null) {
      return;
    }

    if (node.left) {
      traverse(node.left);
    }

    if (node.right) {
      traverse(node.right);
    }

    data.push(node.value);
  };

  traverse(root);

  return data;
}

export function depthFirstSearchInOrder<T>(root: BinaryTreeNode<T>) {
  const data: Array<T | null> = [];

  const traverse = (node: BinaryTreeNode<T> | null) => {
    if (node === null) {
      return;
    }

    if (node.left) {
      traverse(node.left);
    }

    data.push(node.value);

    if (node.right) {
      traverse(node.right);
    }
  };

  traverse(root);

  return data;
}
