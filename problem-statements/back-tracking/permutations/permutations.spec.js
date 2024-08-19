import { test, describe, expect } from "vitest";
import { permute } from "./permutations";

describe("permutations 1", () => {
  const scenerios = [
    {
      name: "6 permutations",
      nums: [1, 2, 3],
      expected: [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
    },
    {
      name: "2 permutations",
      nums: [0, 1],
      expected: [
        [0, 1],
        [1, 0],
      ],
    },
    {
      name: "1 permutation",
      nums: [1],
      expected: [[1]],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = permute(scenerio.nums);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
