import { describe, expect, test } from "vitest";
import {
  createLinkedList,
  getArrayFromLinkedList,
} from "../linked-list/linked-list";
import { mergeTwoLists } from "./merge-two-lists";

describe("merge two lists", () => {
  const scenerios = [
    {
      name: "both non empty lists",
      list1: [1, 2, 4],
      list2: [1, 3, 4],
      expected: [1, 1, 2, 3, 4, 4],
    },
    {
      name: "both empty lists",
      list1: [],
      list2: [],
      expected: [],
    },
    {
      name: "first empty second non empty list",
      list1: [],
      list2: [0],
      expected: [0],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const list1 = createLinkedList(scenerio.list1);
      const list2 = createLinkedList(scenerio.list2);
      const actual = mergeTwoLists(list1, list2);
      const actualArray = getArrayFromLinkedList(actual);
      expect(actualArray).toStrictEqual(scenerio.expected);
    });
  }
});
