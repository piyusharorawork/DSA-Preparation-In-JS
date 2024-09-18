import { test, describe, expect } from "vitest";
import { permuteUnique } from "./permutations-II";
import { arraysMatch } from "../../../helpers/array-helpers";

describe("permutations II", () => {
  const scenerios = [
    {
      name: "3 permutations",
      nums: [1, 1, 2],
      expected: [
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],
      ],
    },
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
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = permuteUnique(scenerio.nums);
      expect(arraysMatch(actual, scenerio.expected)).toBeTruthy();
    });
  }
});
