import { test, describe, expect } from "vitest";
import { mergeKLists } from "./merge-k-sorted-lists";
import { convertLinkedListToArray } from "../../../helpers/linked-list-helper";
import { createLinkedList } from "../../../data-structures/linked-list/linked-list";

describe("merge k-sorted-lists", () => {
  const scenerios = [
    {
      name: "3 lists",
      lists: [
        [1, 4, 5],
        [1, 3, 4],
        [2, 6],
      ],
      expected: [1, 1, 2, 3, 4, 4, 5, 6],
    },
    // {
    //   name: "empty lists",
    //   lists: [],
    //   expected: [],
    // },
    // {
    //   name: "1 list with empty",
    //   lists: [[]],
    //   expected: [],
    // },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const linkedLists = [];
      for (const list of scenerio.lists) {
        linkedLists.push(createLinkedList(list));
      }
      const actual = mergeKLists(linkedLists);
      const actualArray = convertLinkedListToArray(actual);
      expect(actualArray).toStrictEqual(scenerio.expected);
    });
  }
});
