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

export function displayBinaryTree(root) {
  console.log("###################################################");

  const helper = (node = root, prefix = "", isLeft = true) => {
    if (node === null) return;

    if (node === null) {
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}null`);
      return;
    }

    console.log(
      `${prefix}${isLeft ? "└── " : "┌── "}${JSON.stringify(node.val)}`
    );

    const newPrefix = `${prefix}${isLeft ? "    " : "│   "}`;

    if (node.left || node.right) {
      if (node.right) helper(node.right, newPrefix, false);
      if (node.left) helper(node.left, newPrefix, true);
    }
  };

  helper();

  console.log("###################################################");
}
