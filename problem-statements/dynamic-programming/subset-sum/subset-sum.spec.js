import { test, describe, expect } from "vitest";
import { subsetSum } from "./subset-sum";

describe("subset sum", () => {
  const scenerios = [
    {
      name: "exists",
      nums: [1, 5, 3, 9],
      target: 8,
      expected: true,
    },
    {
      name: "exists",
      nums: [1, 5, 3, 9],
      target: 15,
      expected: true,
    },
    {
      name: "not exists",
      nums: [1, 5, 3, 9],
      target: 16,
      expected: false,
    },
    {
      name: "exists",
      nums: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      target: 16,
      expected: true,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = subsetSum(scenerio.nums, scenerio.target);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
