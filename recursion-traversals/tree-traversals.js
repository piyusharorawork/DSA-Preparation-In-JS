import { createBinaryTree } from "../data-structures/binary-tree";

// display all nodes In order Traversal
function displayAllNodes(root) {
  if (root === null) return; // Termination

  console.log(root.val); // Operation
  displayAllNodes(root.left); // Recursion
  displayAllNodes(root.right); // Recursion
}

// Similaryly Pre and Post order traversal methods can be implemented ok

//displayAllNodes(createBinaryTree([1, 2, 3, 4, 5, 6, 7, 8]));

function nodeCount(root) {
  if (root === null) return 0; // Termination

  return 1 + nodeCount(root.left) + nodeCount(root.right); // Recursion
}

console.log(nodeCount(createBinaryTree([1, 2, 3, 4, 5, 6, 7, 8])));
