import { test, describe, expect } from "vitest";
import { minSubsetSumDifference } from "./min-subset-sum-difference";

describe("min subset-sum-difference", () => {
  const scenerios = [
    {
      name: "ex1",
      nums: [1, 6, 11, 5],
      expected: 1,
    },
    {
      name: "ex2",
      nums: [1, 5, 11, 15],
      expected: 0,
    },
    {
      name: "ex3",
      nums: [1, 2, 7],
      expected: 4,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = minSubsetSumDifference(scenerio.nums);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
