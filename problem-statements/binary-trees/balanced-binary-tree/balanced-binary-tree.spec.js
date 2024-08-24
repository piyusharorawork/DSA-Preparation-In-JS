import { expect, describe, test } from "vitest";
import { isBalanced } from "./balanced-binary-tree";
import { createBinaryTree } from "../../../data-structures/binary-tree";

describe("balanced binary tree", () => {
  const scenerios = [
    {
      name: "balanced",
      values: [3, 9, 20, null, null, 15, 7],
      expected: true,
    },
    {
      name: "not balanced",
      values: [1, 2, 2, 3, 3, null, null, 4, 4],
      expected: false,
    },
    {
      name: "empty",
      values: [],
      expected: true,
    },
    {
      name: "not balaned more",
      values: [1, 2, 2, 3, null, null, 3, 4, null, null, 4],
      expected: false,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const root = createBinaryTree(scenerio.values);
      const actual = isBalanced(root);
      expect(actual).toBe(scenerio.expected);
    });
  }
});
