import { expect, describe, test } from "vitest";
import { lowestCommonAncestor } from "./lca-bst";
import {
  createBinaryTree,
  TreeNode,
} from "../../../data-structures/binary-tree/binary-tree";

describe("lca bst", () => {
  const scenerios = [
    {
      name: "with root as LCA",
      values: [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
      p: 2,
      q: 8,
      expected: 6,
    },
    {
      name: "with not root LCA",
      values: [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
      p: 2,
      q: 4,
      expected: 2,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const root = createBinaryTree(scenerio.values);
      const pNode = new TreeNode(scenerio.p);
      const qNode = new TreeNode(scenerio.q);
      const actual = lowestCommonAncestor(root, pNode, qNode);
      expect(actual.val).toBe(scenerio.expected);
    });
  }
});
