import { BinarySearchTree, IBSTNode } from '../binarySearchTree';
import { Queue } from '../queue';

export interface IBreadthFirstSearch<T> {
  traverse(): Array<T>;
}

export class BreadthFirstSearch<T> extends BinarySearchTree<T> implements IBreadthFirstSearch<T> {
  traverse() {
    let node: IBSTNode<T> | null = this.root;
    const data: Array<T> = [],
      queue = new Queue<IBSTNode<T> | null>();
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
