import { Queue } from "../data-structures/queue/queue";
export function convertBinaryTreeToArray(root) {
  if (root === null) return [];

  const queue = new Queue();
  queue.enqueue(root);

  const result = [];

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    if (node === null) result.push(null);
    else {
      node.left ? queue.enqueue(node.left) : queue.enqueue(null);
      node.right ? queue.enqueue(node.right) : queue.enqueue(null);
      result.push(node.val);
    }
  }

  while (result[result.length - 1] === null) result.pop();

  return result;
}
