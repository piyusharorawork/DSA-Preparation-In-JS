import { createLinkedList } from "../data-structures/linked-list";

function displayNodes(node = head) {
  if (node === null) return; // Termination
  console.log(node.val); // Operation

  displayNodes(node.next); // Recursion
}

function displayNodesReverse(node = head) {
  if (node === null) return; // Termination

  displayNodesReverse(node.next); // Recursion

  console.log(node.val); // Operation
}

displayNodesReverse(createLinkedList([1, 2, 3, 4, 5]));
