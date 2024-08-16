import { test, describe, expect } from "vitest";
import { middleNode } from "./middle-linked-list";
import { createLinkedList } from "../../../data-structures/linked-list";

describe("middle linked-list", () => {
  const scenerios = [
    {
      name: "5 nodes",
      values: [1, 2, 3, 4, 5],
      expected: 3,
    },
    {
      name: "6 nodes",
      values: [1, 2, 3, 4, 5, 6],
      expected: 4,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const head = createLinkedList(scenerio.values);
      const actual = middleNode(head);
      expect(actual.val).toStrictEqual(scenerio.expected);
    });
  }
});
