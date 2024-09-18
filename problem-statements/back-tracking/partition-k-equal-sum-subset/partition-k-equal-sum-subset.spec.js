import { test, describe, expect } from "vitest";
import { canPartitionKSubsets } from "./partition-k-equal-sum-subset";

describe("partition k-equal-sum-subset", () => {
  const scenerios = [
    {
      name: "k=4",
      nums: [4, 3, 2, 3, 5, 2, 1],
      k: 4,
      expected: true,
    },
    {
      name: "k=3",
      nums: [1, 2, 3, 4],
      k: 3,
      expected: false,
    },
    {
      name: "k=2",
      nums: [1, 1, 1, 1, 2, 2, 2, 2],
      k: 2,
      expected: true,
    },
    {
      name: "k=4",
      nums: [2, 2, 2, 2, 3, 4, 5],
      k: 4,
      expected: false,
    },
    {
      name: "k=5",
      nums: [9, 10, 14, 8, 15, 7, 15, 12, 15, 13, 10, 14, 9, 11, 9, 14],
      k: 5,
      expected: true,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = canPartitionKSubsets(scenerio.nums, scenerio.k);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
