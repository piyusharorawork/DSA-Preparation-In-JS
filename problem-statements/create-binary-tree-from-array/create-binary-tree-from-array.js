import { Queue } from "../implement-queue/queue";

export class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function createBinaryTreeFromArray(nums) {
  const queue = new Queue();

  if (nums.length === 0 || nums[0] === null) {
    return queue;
  }

  const root = new TreeNode(nums[0]);
  queue.enqueue(root);

  let i = 1;

  for (i = 1; i < nums.length; i++) {
    const node = queue.dequeue();

    // Update Left Child
    if (nums[i] !== null) {
      const leftNode = new TreeNode(nums[i]);
      node.left = leftNode;
      queue.enqueue(leftNode);
    }
    i++;

    // Update Right Child
    if (nums[i] !== null) {
      const rightNode = new TreeNode(nums[i]);
      node.right = rightNode;
      queue.enqueue(rightNode);
    }
    i++;
  }

  return root;
}
