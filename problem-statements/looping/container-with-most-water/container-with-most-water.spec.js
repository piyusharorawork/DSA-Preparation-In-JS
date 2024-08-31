import { test, describe, expect } from "vitest";
import { maxArea } from "./container-with-most-water";

describe("container with-most-water", () => {
  const scenerios = [
    {
      name: "area = 49",
      height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      expected: 49,
    },
    {
      name: "area = 1",
      height: [1, 1],
      expected: 1,
    },
    {
      name: "area = 2",
      height: [1, 2, 1],
      expected: 2,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = maxArea(scenerio.height);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
