import { expect, describe, test } from "vitest";
import { isPerfectBinaryTree } from "./perfect-binary-tree";
import { createBinaryTreeFromArray } from "../create-binary-tree-from-array/create-binary-tree-from-array";

describe("balanced binary tree", () => {
  const scenerios = [
    // {
    //   name: "perfect",
    //   values: [1, 2, 3, 4, 5, 6, 7],
    //   expected: true,
    // },
    // {
    //   name: "balanced but not perfect",
    //   values: [3, 9, 20, null, null, 15, 7],
    //   expected: false,
    // },
    // {
    //   name: "not perfect",
    //   values: [1, 2, 2, 3, 3, null, null, 4, 4],
    //   expected: false,
    // },
    // {
    //   name: "empty",
    //   values: [],
    //   expected: true,
    // },
    {
      name: "not perfect",
      values: [1, 2, 2, 3, null, null, 3, 4, null, null, 4],
      expected: false,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const root = createBinaryTreeFromArray(scenerio.values);
      const actual = isPerfectBinaryTree(root);
      expect(actual).toBe(scenerio.expected);
    });
  }
});
