import { test, describe, expect } from "vitest";
import { subsets } from "./subsets";
import { arraysMatch } from "../../../helpers/array-helpers";

describe("subsets 1", () => {
  const scenerios = [
    {
      name: "8 subsets",
      nums: [1, 2, 3],
      expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
    },
    {
      name: "2 subsets",
      nums: [0],
      expected: [[], [0]],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = subsets(scenerio.nums);

      expect(arraysMatch(scenerio.expected, actual)).toBeTruthy();
    });
  }
});
