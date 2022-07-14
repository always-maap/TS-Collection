import { Queue } from '../queue';
import { BinaryTreeNode } from '../tree';

export function breadthFirstSearch<T>(root: BinaryTreeNode<T>) {
  let node = root;
  const data: Array<T> = [];
  const queue = new Queue<BinaryTreeNode<T>>();

  queue.enqueue(node);

  while (queue.size) {
    node = queue.dequeue()!;
    data.push(node.value!);
    if (node?.left) queue.enqueue(node.left);
    if (node?.right) queue.enqueue(node.right);
  }

  return data;
}
