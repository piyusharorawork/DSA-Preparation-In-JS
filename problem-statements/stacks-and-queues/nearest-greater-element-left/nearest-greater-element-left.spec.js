import { test, describe, expect } from "vitest";
import { nearestGreaterElementLeft } from "./nearest-greater-element-left";

describe("nearest greater-element-left", () => {
  const scenerios = [
    {
      name: "ex1",
      nums: [10, 5, 11, 6, 20, 12],
      expected: [-1, 10, -1, 11, -1, 20],
    },
    {
      name: "ex2",
      nums: [1, 3, 2, 4],
      expected: [-1, -1, 3, -1],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = nearestGreaterElementLeft(scenerio.nums);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
