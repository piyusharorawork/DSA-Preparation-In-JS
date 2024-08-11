import { expect, describe, test } from "vitest";
import { invertTree } from "./invert-binary-tree";
import { createBinaryTreeFromArray } from "../create-binary-tree-from-array/create-binary-tree-from-array";

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
      const root = createBinaryTreeFromArray(scenerio.values);
      const actual = invertTree(root);

      // TODO requires a function that takes a tree and returns the array
      // const actualArray = createBinaryTreeFromArray(actual);
      // expect(actualArray).toStrictEqual(scenerio.expected);
    });
  }
});
