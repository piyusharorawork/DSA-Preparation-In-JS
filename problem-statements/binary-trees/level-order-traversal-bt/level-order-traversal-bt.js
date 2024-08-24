import { Queue } from "../../../data-structures/queue";

export function levelOrder(root) {
  if (root === null) {
    return [];
  }
  const result = [];
  const queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const level = queue.size();
    const levelList = [];

    for (let i = 0; i < level; i++) {
      const node = queue.dequeue();
      levelList.push(node.val);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    result.push(levelList);
  }

  return result;
}
