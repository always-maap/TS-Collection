import { BinarySearchTree, BSTNode } from './BinarySearchTree';
import { Queue } from './Queue';

export interface IBreadthFirstSearch<T> {
  traverse(): Array<T>;
}

export class BreadthFirstSearch<T> extends BinarySearchTree<T> implements IBreadthFirstSearch<T> {
  traverse() {
    let node: BSTNode<T> | null = this.root;
    const data: Array<T> = [],
      queue = new Queue<BSTNode<T> | null>();
    queue.enqueue(node);
    while (queue.size) {
      node = queue.dequeue()!;
      data.push(node.value!);
      if (node?.left) queue.enqueue(node.left);
      if (node?.right) queue.enqueue(node.right);
    }
    return data;
  }
}
