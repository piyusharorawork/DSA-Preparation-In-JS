import { test, describe, expect } from "vitest";
import { canPartition } from "./partition-equal-subset-sum";

describe("partition equal-subset-sum", () => {
  const scenerios = [
    {
      name: "true",
      nums: [1, 5, 11, 5],
      expected: true,
    },
    {
      name: "false",
      nums: [1, 2, 3, 5],
      expected: false,
    },
    {
      name: "false",
      nums: [1, 2, 3, 10],
      expected: false,
    },
    {
      name: "false",
      nums: [23, 13, 11, 7, 6, 5, 5],
      expected: true,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = canPartition(scenerio.nums);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
