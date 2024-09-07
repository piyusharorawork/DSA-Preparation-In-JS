import { test, describe, expect } from "vitest";
import { trap } from "./trapping-rain-water";

describe("trapping rain-water", () => {
  const scenerios = [
    {
      name: "6",
      heights: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
      expected: 6,
    },
    {
      name: "9",
      heights: [4, 2, 0, 3, 2, 5],
      expected: 9,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = trap(scenerio.heights);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
