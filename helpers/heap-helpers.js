import { displayBinaryTree } from "./tree-helpers";
import { createBinaryTree } from "../data-structures/binary-tree/binary-tree";
export const displayHeap = (heap) => {
  const heapArray = heap.elements;
  const root = createBinaryTree(heapArray);
  displayBinaryTree(root);
};
