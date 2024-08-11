import { Queue } from "../implement-queue/queue";

export class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function createBinaryTreeFromArray(nums) {
  const N = nums.length;
  if (N === 0 || nums[0] === null) {
    return null;
  }

  const queue = new Queue();
  const root = new TreeNode(nums[0]);
  queue.enqueue(root);

  let i = 1;

  while (i < N) {
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
