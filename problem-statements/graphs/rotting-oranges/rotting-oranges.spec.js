import { test, describe, expect } from "vitest";
import { orangesRotting } from "./rotting-oranges";

describe("rotting oranges", () => {
  const scenerios = [
    {
      name: "4 days",
      grid: [
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
      ],
      expected: 4,
    },
    {
      name: "-1 days",
      grid: [
        [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1],
      ],
      expected: -1,
    },
    {
      name: "0 days",
      grid: [[0, 2]],
      expected: 0,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = orangesRotting(scenerio.grid);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
