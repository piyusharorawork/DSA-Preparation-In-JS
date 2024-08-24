import { expect, describe, test } from "vitest";
import { heightTree } from "./height-tree";
import { createBinaryTree } from "../../../data-structures/binary-tree";

describe("height tree", () => {
  const scenerios = [
    {
      name: "7 nodes",
      values: [1, 2, 3, null, 5, null, 0, 0, null, null, 100],
      expected: 4,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const root = createBinaryTree(scenerio.values);
      const actual = heightTree(root);
      expect(actual).toBe(scenerio.expected);
    });
  }
});
