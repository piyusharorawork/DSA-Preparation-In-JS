import { test, describe, expect } from "vitest";
import { threeSum } from "./three-sum";

describe("three sum", () => {
  const scenerios = [
    {
      name: "2 three sums",
      nums: [-1, 0, 1, 2, -1, -4],
      expected: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    {
      name: "0 three sums",
      nums: [0, 1, 1],
      expected: [],
    },
    {
      name: "1 three sums",
      nums: [0, 0, 0],
      expected: [[0, 0, 0]],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = threeSum(scenerio.nums);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
