import { test, describe, expect } from "vitest";
import { isValidBST } from "./validate-bst";
import { createBinaryTree } from "../../../data-structures/binary-tree/binary-tree";

describe("validate bst", () => {
  const scenerios = [
    {
      name: "valid",
      values: [2, 1, 3],
      expected: true,
    },
    {
      name: "invalid",
      values: [5, 1, 4, null, null, 3, 6],
      expected: false,
    },
    {
      name: "invalid ",
      values: [2, 2, 2],
      expected: false,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const root = createBinaryTree(scenerio.values);
      const actual = isValidBST(root);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
