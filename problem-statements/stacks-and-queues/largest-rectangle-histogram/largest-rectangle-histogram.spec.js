import { test, describe, expect } from "vitest";
import { largestRectangleArea } from "./largest-rectangle-histogram";

describe("largest rectangle-histogram", () => {
  const scenerios = [
    {
      name: "10",
      heights: [2, 1, 5, 6, 2, 3],
      expected: 10,
    },
    {
      name: "4",
      heights: [2, 4],
      expected: 4,
    },
    {
      name: "2",
      heights: [1, 1],
      expected: 2,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = largestRectangleArea(scenerio.heights);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
