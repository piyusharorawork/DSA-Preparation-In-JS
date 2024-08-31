import { test, describe, expect } from "vitest";
import { rightSideView } from "./right-side-view";
import { createBinaryTree } from "../../../data-structures/binary-tree/binary-tree";

describe("right side-view", () => {
  const scenerios = [
    {
      name: "3 values",
      values: [1, 2, 3, null, 5, null, 4],
      expected: [1, 3, 4],
    },
    {
      name: "2 values",
      values: [1, null, 3],
      expected: [1, 3],
    },
    {
      name: "0 values",
      values: [],
      expected: [],
    },
    {
      name: "3 values",
      values: [1, 2, 3, 4],
      expected: [1, 3, 4],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const root = createBinaryTree(scenerio.values);
      const actual = rightSideView(root);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
