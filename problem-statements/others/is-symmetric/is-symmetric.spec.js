import { expect, describe, test } from "vitest";
import { isSymmetric } from "./is-symmetric";
import { createBinaryTreeFromArray } from "../create-binary-tree-from-array/create-binary-tree-from-array";

describe("is symmetric", () => {
  const scenerios = [
    {
      name: "symmetric with height =3 ",
      values: [1, 2, 2, 3, 4, 4, 3],
      expected: true,
    },
    {
      name: "symmetric with height 2",
      values: [1, 2, 2],
      expected: true,
    },
    {
      name: "not symmetric with height 3",
      values: [1, 2, null, null, 2, null, 3, null, 3],
      expected: false,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const root = createBinaryTreeFromArray(scenerio.values);
      const actual = isSymmetric(root);
      expect(actual).toBe(scenerio.expected);
    });
  }
});
