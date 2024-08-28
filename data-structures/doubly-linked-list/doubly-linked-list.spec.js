import { expect, test, describe } from "vitest";
import { DoublyLinkedList } from "./doubly-linked-list";

test("doubly linked list", () => {
  const dll = new DoublyLinkedList();

  dll.insertBeg(1);
  dll.insertBeg(2);
  expect(dll.getElementsArray()).toStrictEqual([2, 1]);
  dll.insertBeg(3);
  expect(dll.getElementsArray()).toStrictEqual([3, 2, 1]);
  dll.insertEnd(4);
  expect(dll.getElementsArray()).toStrictEqual([3, 2, 1, 4]);
  dll.insertEnd(5);
  expect(dll.getElementsArray()).toStrictEqual([3, 2, 1, 4, 5]);
  expect(dll.deleteBeg().val).toBe(3);
  expect(dll.getElementsArray()).toStrictEqual([2, 1, 4, 5]);
  expect(dll.deleteBeg().val).toBe(2);
  expect(dll.getElementsArray()).toStrictEqual([1, 4, 5]);
  expect(dll.deleteEnd().val).toBe(5);
  expect(dll.getElementsArray()).toStrictEqual([1, 4]);
  expect(dll.deleteEnd().val).toBe(4);
  expect(dll.getElementsArray()).toStrictEqual([1]);
  dll.insertEnd(2);
  const node3 = dll.insertEnd(3);
  const node4 = dll.insertEnd(4);
  dll.insertEnd(5);
  expect(dll.getElementsArray()).toStrictEqual([1, 2, 3, 4, 5]);
  dll.deleteNode(node3);
  expect(dll.getElementsArray()).toStrictEqual([1, 2, 4, 5]);
  dll.deleteNode(node4);
  expect(dll.getElementsArray()).toStrictEqual([1, 2, 5]);
});
