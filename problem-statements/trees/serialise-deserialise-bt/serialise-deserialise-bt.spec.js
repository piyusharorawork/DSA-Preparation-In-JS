import { test, describe, expect } from "vitest";
import { deserialize, serialize } from "./serialise-deserialise-bt";
import { createBinaryTree } from "../../../data-structures/binary-tree/binary-tree";
import { convertBinaryTreeToArray } from "../../../helpers/tree-helpers";

describe("serialise deserialise-bt", () => {
  const scenerios = [
    {
      name: "5 nodes",
      values: [1, 2, 3, null, null, 4, 5],
      expected: [1, 2, 3, null, null, 4, 5],
    },
    {
      name: "empty",
      values: [],
      expected: [],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const root = createBinaryTree(scenerio.values);
      const serialised = serialize(root);
      const deserialisedRoot = deserialize(serialised);
      const deserialisedList = convertBinaryTreeToArray(deserialisedRoot);
      expect(deserialisedList).toStrictEqual(scenerio.expected);
    });
  }
});
