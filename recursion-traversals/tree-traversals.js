import { createBinaryTree } from "../data-structures/binary-tree";

// display all nodes In order Traversal
function displayAllNodes(head) {
  if (head === null) return;

  console.log(head.val);
  displayAllNodes(head.left);
  displayAllNodes(head.right);
}

// Similaryly Pre and Post order traversal methods can be implemented ok

displayAllNodes(createBinaryTree([1, 2, 3, 4, 5, 6, 7, 8]));
