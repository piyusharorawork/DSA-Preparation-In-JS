import { test, describe, expect } from "vitest";
import { insertPositionSortedArray } from "./insert-position-sorted-array";

describe("insert position sorted array", () => {
  const scenerios = [
    {
      name: "when more than 1 element",
      array: [-100, -50, 0, 20, 29, 30, 52],
      target: 32,
      expected: 6,
    },
    {
      name: "when only 1 element where target is more",
      array: [-100],
      target: 32,
      expected: 1,
    },
    {
      name: "when only 1 element where target is less",
      array: [-100],
      target: -200,
      expected: 0,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = insertPositionSortedArray(scenerio.array, scenerio.target);
      expect(actual).toBe(scenerio.expected);
    });
  }
});
