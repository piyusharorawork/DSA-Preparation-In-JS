import { test, describe, expect } from "vitest";
import { lowestCommonAncestor } from "./lca-binary-tree";
import {
  createBinaryTreeFromArray,
  TreeNode,
} from "../../others/create-binary-tree-from-array/create-binary-tree-from-array";

describe("lca binary tree", () => {
  const scenerios = [
    {
      name: "root is the lca",
      values: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
      p: 5,
      q: 1,
      expected: 3,
    },
    // {
    //   name: "p is the lca",
    //   values: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
    //   p: 5,
    //   q: 4,
    //   expected: 5,
    // },
    // {
    //   name: "root is the lca with h = 2",
    //   values: [1, 2],
    //   p: 1,
    //   q: 2,
    //   expected: 1,
    // },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const root = createBinaryTreeFromArray(scenerio.values);
      const nodeP = new TreeNode(scenerio.p);
      const nodeQ = new TreeNode(scenerio.q);
      const actual = lowestCommonAncestor(root, nodeP, nodeQ);
      expect(actual.val).toStrictEqual(scenerio.expected);
    });
  }
});
