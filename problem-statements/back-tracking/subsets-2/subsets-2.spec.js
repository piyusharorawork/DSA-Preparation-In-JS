import { test, describe, expect } from "vitest";
import { subsetsWithDup } from "./subsets-2";
import { arraysMatch } from "../../../helpers/array-helpers";

describe("subsets 2", () => {
  const scenerios = [
    {
      name: "6 subsets",
      nums: [1, 2, 2],
      expected: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]],
    },
    {
      name: "2 subsets",
      nums: [0],
      expected: [[], [0]],
    },
    {
      name: "6 subsets unsorted",
      nums: [2, 1, 2],
      expected: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = subsetsWithDup(scenerio.nums);
      expect(arraysMatch(actual, scenerio.expected)).toBeTruthy();
    });
  }
});
