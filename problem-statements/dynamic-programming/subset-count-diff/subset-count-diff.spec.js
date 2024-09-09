import { test, describe, expect } from "vitest";
import { subsetCountDiff } from "./subset-count-diff";

describe("subset count-diff", () => {
  const scenerios = [
    {
      name: "ex1",
      nums: [5, 2, 6, 4],
      diff: 3,
      expected: 1,
    },
    {
      name: "ex2",
      nums: [1, 2, 3, 1, 2],
      diff: 1,
      expected: 5,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = subsetCountDiff(scenerio.nums, scenerio.diff);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
