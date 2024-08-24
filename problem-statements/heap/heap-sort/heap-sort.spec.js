import { test, describe, expect } from "vitest";
import { sortArray } from "./heap-sort";

describe("heap sort", () => {
  const scenerios = [
    {
      name: "4 elements",
      nums: [5, 2, 3, 1],
      expected: [1, 2, 3, 5],
    },
    {
      name: "6 elements",
      nums: [5, 1, 1, 2, 0, 0],
      expected: [0, 0, 1, 1, 2, 5],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = sortArray(scenerio.nums);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
