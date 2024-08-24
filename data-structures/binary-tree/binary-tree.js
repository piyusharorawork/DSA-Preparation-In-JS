import { Queue } from "../queue/queue";

export class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function createBinaryTree(nums) {
  const N = nums.length;
  if (N === 0) return null;

  const queue = new Queue();
  const root = new TreeNode(nums[0]);
  queue.enqueue(root);

  let i = 1;

  while (i < N) {
    const node = queue.dequeue();

    // Update Left Child
    if (nums[i] !== null) {
      node.left = new TreeNode(nums[i]);
      queue.enqueue(node.left);
    }
    i++;
    // Update Right Child
    if (i < N && nums[i] !== null) {
      node.right = new TreeNode(nums[i]);
      queue.enqueue(node.right);
    }
    i++;
  }

  return root;
}
