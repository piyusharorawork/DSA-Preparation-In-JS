import { test, describe, expect } from "vitest";
import { buildTree } from "./bt-from-pre-and-in-order";
import { convertBinaryTreeToArray } from "../../../helpers/tree-helpers";

describe("bt from-pre-and-in-order", () => {
  const scenerios = [
    {
      name: "5 nodes",
      preorder: [3, 9, 20, 15, 7],
      inorder: [9, 3, 15, 20, 7],
      expected: [3, 9, 20, null, null, 15, 7],
    },
    {
      name: "1 nodes",
      preorder: [-1],
      inorder: [-1],
      expected: [-1],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = buildTree(scenerio.preorder, scenerio.inorder);
      const actualArray = convertBinaryTreeToArray(actual);
      expect(actualArray).toStrictEqual(scenerio.expected);
    });
  }
});
