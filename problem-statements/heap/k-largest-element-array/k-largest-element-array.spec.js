import { test, describe, expect } from "vitest";
import { findKthLargest } from "./k-largest-element-array";

describe("k largest-element-array", () => {
  const scenerios = [
    {
      name: "ex1",
      nums: [3, 2, 1, 5, 6, 4],
      k: 2,
      expected: 5,
    },
    {
      name: "ex2",
      nums: [3, 2, 3, 1, 2, 4, 5, 5, 6],
      k: 4,
      expected: 4,
    },
    {
      name: "ex3",
      nums: [1],
      k: 1,
      expected: 1,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = findKthLargest(scenerio.nums, scenerio.k);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
