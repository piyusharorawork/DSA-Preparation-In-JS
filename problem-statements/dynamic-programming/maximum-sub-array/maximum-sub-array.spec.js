import { test, describe, expect } from "vitest";
import { maxSubArray } from "./maximum-sub-array";

describe("maximum sub-array", () => {
  const scenerios = [
    {
      name: "sum = 6",
      nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
      expected: 6,
    },
    {
      name: "sum = 1",
      nums: [1],
      expected: 1,
    },
    {
      name: "sum = 23",
      nums: [5, 4, -1, 7, 8],
      expected: 23,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = maxSubArray(scenerio.nums);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
