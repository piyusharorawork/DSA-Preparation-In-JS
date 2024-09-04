import { test, describe, expect } from "vitest";
import { nextGreaterElementRight } from "./next-greater-element-right";

describe("next greater-element-right", () => {
  const scenerios = [
    {
      name: "ex 1",
      nums: [4, 5, 2, 25],
      expected: [5, 25, 25, -1],
    },
    {
      name: "ex 2",
      nums: [13, 7, 6, 12],
      expected: [-1, 12, 12, -1],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = nextGreaterElementRight(scenerio.nums);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
