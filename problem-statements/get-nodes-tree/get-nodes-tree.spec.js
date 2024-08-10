import { expect, describe, test } from "vitest";
import { getNodesTree } from "./get-nodes-tree";
import { createBinaryTreeFromArray } from "../create-binary-tree-from-array/create-binary-tree-from-array";

describe("get nodes tree", () => {
  const scenerios = [
    {
      name: "7 nodes",
      values: [1, 2, 3, null, 5, null, 0, 0, null, null, 100],
      expected: 7,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const root = createBinaryTreeFromArray(scenerio.values);
      const actual = getNodesTree(root);
      expect(actual).toBe(scenerio.expected);
    });
  }
});
