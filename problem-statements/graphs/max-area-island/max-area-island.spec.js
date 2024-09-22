import { test, describe, expect } from "vitest";
import { maxAreaOfIsland } from "./max-area-island";

describe("max area-island", () => {
  const scenerios = [
    {
      name: "ex1",
      grid: [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      ],
      expected: 6,
    },
    {
      name: "ex2",
      grid: [[0, 0, 0, 0, 0, 0, 0, 0]],
      expected: 0,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = maxAreaOfIsland(scenerio.grid);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
