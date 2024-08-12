import { expect, describe, test } from "vitest";
import { levelOrder } from "./level-order-traversal-bt";
import { createBinaryTreeFromArray } from "../create-binary-tree-from-array/create-binary-tree-from-array";

describe("level order traversal bt", () => {
  const scenerios = [
    {
      name: "3 levels",
      values: [3, 9, 20, null, null, 15, 7],
      expected: [[3], [9, 20], [15, 7]],
    },
    {
      name: "1 level",
      values: [1],
      expected: [[1]],
    },
    {
      name: "empty",
      values: [],
      expected: [],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const root = createBinaryTreeFromArray(scenerio.values);
      const actual = levelOrder(root);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
