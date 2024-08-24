import { test, describe, expect } from "vitest";
import { sortColors } from "./sort-colors";

describe("sort colors", () => {
  const scenerios = [
    {
      name: "6 colors",
      nums: [2, 0, 2, 1, 1, 0],
      expected: [0, 0, 1, 1, 2, 2],
    },
    {
      name: "3 colors",
      nums: [2, 0, 1],
      expected: [0, 1, 2],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = sortColors(scenerio.nums);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
