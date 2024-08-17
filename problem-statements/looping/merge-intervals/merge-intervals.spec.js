import { test, describe, expect } from "vitest";
import { merge } from "./merge-intervals";

describe("merge intervals", () => {
  const scenerios = [
    {
      name: "4 intervals",
      intervals: [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ],
      expected: [
        [1, 6],
        [8, 10],
        [15, 18],
      ],
    },
    {
      name: "2 intervals",
      intervals: [
        [1, 4],
        [4, 5],
      ],
      expected: [[1, 5]],
    },
    {
      name: "2 intervals unsorted",
      intervals: [
        [1, 4],
        [0, 4],
      ],
      expected: [[0, 4]],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = merge(scenerio.intervals);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
