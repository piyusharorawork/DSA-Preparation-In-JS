import { test, describe, expect } from "vitest";
import { rightInsertPositionSortedDuplicateArray } from "./right-insert-position-sorted-duplicate-array";

describe("right insert position sorted duplicate array", () => {
  const scenerios = [
    {
      name: "when more than 1 element",
      array: [-100, -50, 0, 0, 0, 0, 0, 20, 29, 30, 52],
      target: 0,
      expected: 7,
    },
    {
      name: "when first element",
      array: [-100, -50, 0, 0, 0, 0, 0, 20, 29, 30, 52],
      target: -100,
      expected: 1,
    },
    {
      name: "when last element",
      array: [-100, -50, 0, 0, 0, 0, 0, 20, 29, 30, 52],
      target: 52,
      expected: 11,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = rightInsertPositionSortedDuplicateArray(
        scenerio.array,
        scenerio.target
      );
      expect(actual).toBe(scenerio.expected);
    });
  }
});
