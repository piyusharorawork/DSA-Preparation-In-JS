import { test, describe, expect } from "vitest";
import { insert } from "./insert-interval";

describe("insert interval", () => {
  const scenerios = [
    {
      name: "2 intervals",
      intervals: [
        [1, 3],
        [6, 9],
      ],
      newInterval: [2, 5],
      expected: [
        [1, 5],
        [6, 9],
      ],
    },
    {
      name: "5 intervals",
      intervals: [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      newInterval: [4, 8],
      expected: [
        [1, 2],
        [3, 10],
        [12, 16],
      ],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = insert(scenerio.intervals, scenerio.newInterval);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
