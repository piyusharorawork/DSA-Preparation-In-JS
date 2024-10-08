import { describe, expect, test } from "vitest";
import { createLinkedList } from "./linked-list";
import { convertLinkedListToArray } from "../../helpers/linked-list-helper";

describe("linked list", () => {
  const scenerios = [
    {
      name: "with 3 nodes",
      array: [1, 2, 3],
      expected: [1, 2, 3],
    },
    {
      name: "with empty nodes",
      array: [],
      expected: [],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const list = createLinkedList(scenerio.array);
      const actual = convertLinkedListToArray(list);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
