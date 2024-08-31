import { test, describe, expect } from "vitest";
import { kthSmallest } from "./kth-smallest-bst";
import { createBinaryTree } from "../../../data-structures/binary-tree/binary-tree";

describe("kth smallest-bst", () => {
  const scenerios = [
    {
      name: "smallest =1",
      values: [3, 1, 4, null, 2],
      k: 1,
      expected: 1,
    },
    {
      name: "smallest =3",
      values: [5, 3, 6, 2, 4, null, null, 1],
      k: 3,
      expected: 3,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const root = createBinaryTree(scenerio.values);
      const actual = kthSmallest(root, scenerio.k);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
