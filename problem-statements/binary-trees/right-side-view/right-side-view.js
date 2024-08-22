import { Queue } from "../../../data-structures/queue";

export function rightSideView(root) {
  if (root === null) return [];

  // To store the top down list
  const result = [];

  // Queue for BFS
  const queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const N = queue.size();

    // process all the nodes except the right most node
    for (let i = 0; i < N - 1; i++) {
      const node = queue.dequeue();
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }

    // Now the node which is left if the right most node
    const rightMostNode = queue.dequeue();
    if (rightMostNode.left) queue.enqueue(rightMostNode.left);
    if (rightMostNode.right) queue.enqueue(rightMostNode.right);

    result.push(rightMostNode.val);
  }

  return result;
}
