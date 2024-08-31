import { expect, describe, test } from "vitest";
import { diameterOfBinaryTree } from "./diameter-binary-tree";
import { createBinaryTree } from "../../../data-structures/binary-tree/binary-tree";

describe("diameter binary tree", () => {
  const scenerios = [
    {
      name: "diameter =3 ",
      values: [1, 2, 3, 4, 5],
      expected: 3,
    },
    {
      name: "diameter = 1",
      values: [1, 2],
      expected: 1,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const root = createBinaryTree(scenerio.values);
      const actual = diameterOfBinaryTree(root);
      expect(actual).toBe(scenerio.expected);
    });
  }
});
