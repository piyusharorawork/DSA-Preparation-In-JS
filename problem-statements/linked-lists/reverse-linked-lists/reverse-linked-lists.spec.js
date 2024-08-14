import { expect, describe, test } from "vitest";
import {
  createLinkedList,
  getArrayFromLinkedList,
} from "../linked-list/linked-list";
import { reverseList } from "./reverse-linked-lists";

describe("reverse link list", () => {
  const scenerios = [
    {
      name: "with 5 nodes",
      array: [1, 2, 3, 4, 5],
      expected: [5, 4, 3, 2, 1],
    },
    {
      name: "with 2 nodes",
      array: [1, 2],
      expected: [2, 1],
    },
    {
      name: "with empty nodes",
      array: [],
      expected: [],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const head = createLinkedList(scenerio.array);
      const actual = reverseList(head);
      const actualArray = getArrayFromLinkedList(actual);
      expect(actualArray).toStrictEqual(scenerio.expected);
    });
  }
});
