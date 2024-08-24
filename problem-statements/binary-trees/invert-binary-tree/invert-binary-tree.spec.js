import { expect, describe, test } from "vitest";
import { invertTree } from "./invert-binary-tree";
import { createBinaryTree } from "../../../data-structures/binary-tree/binary-tree";
import { convertBinaryTreeToArray } from "../../../helpers/tree-helpers";

describe("invert binary tree", () => {
  const scenerios = [
    {
      name: "tree of height = 3",
      values: [4, 2, 7, 1, 3, 6, 9],
      expected: [4, 7, 2, 9, 6, 3, 1],
    },
    {
      name: "tree of height =2",
      values: [2, 1, 3],
      expected: [2, 3, 1],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const root = createBinaryTree(scenerio.values);
      const actual = invertTree(root);
      const actualArray = convertBinaryTreeToArray(actual);
      expect(actualArray).toStrictEqual(scenerio.expected);
    });
  }
});
