import { test, describe, expect } from "vitest";
import { stockSpan } from "./stock-span-problem";

describe("stock span-problem", () => {
  const scenerios = [
    {
      name: "ex1",
      nums: [100, 80, 60, 70, 60, 75, 85],
      expected: [1, 1, 1, 2, 1, 4, 6],
    },
    {
      name: "ex2",
      nums: [10, 4, 5, 90, 120, 80],
      expected: [1, 1, 2, 4, 5, 1],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = stockSpan(scenerio.nums);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
