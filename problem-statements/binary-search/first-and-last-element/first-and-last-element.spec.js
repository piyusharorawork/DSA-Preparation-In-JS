import { describe, expect, test } from "vitest";
import { searchRange } from "./first-and-last-element";

describe("first and last element", () => {
  const scenerios = [
    {
      name: "15 elements",
      array: [1, 2, 3, 3, 3, 3, 3, 3, 10, 12, 100],
      target: 3,
      expected: [2, 7],
    },
    {
      name: "1 element",
      array: [3],
      target: 3,
      expected: [0, 0],
    },
    {
      name: "6 elements",
      array: [5, 7, 7, 8, 8, 10],
      target: 8,
      expected: [3, 4],
    },
    {
      name: "not found",
      array: [5, 7, 7, 8, 8, 10],
      target: 6,
      expected: [-1, -1],
    },
    {
      name: "empty",
      array: [],
      target: 0,
      expected: [-1, -1],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = searchRange(scenerio.array, scenerio.target);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
