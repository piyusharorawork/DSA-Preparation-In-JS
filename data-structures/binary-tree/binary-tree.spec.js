import {
  convertBinaryTreeToArray,
  displayBinaryTree,
} from "../../helpers/tree-helpers";
import { createBinaryTree } from "./binary-tree";
import { test, describe, expect } from "vitest";

describe("implment binary tree", () => {
  const scenerios = [
    {
      name: "9 nodes",
      values: [10, 20, 30, 40, 50, 60, 70, 80, 90],
      expected: [10, 20, 30, 40, 50, 60, 70, 80, 90],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const root = createBinaryTree(scenerio.values);
      const rootArray = convertBinaryTreeToArray(root);
      displayBinaryTree(root);
      expect(rootArray).toStrictEqual(scenerio.expected);
    });
  }
});
