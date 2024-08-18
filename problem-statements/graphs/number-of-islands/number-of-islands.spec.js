import { test, describe, expect } from "vitest";
import { numIslands } from "./number-of-islands";

describe("number of-islands", () => {
  const scenerios = [
    {
      name: "1 island",
      grid: [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
      ],
      expected: 1,
    },
    {
      name: "3 islands",
      grid: [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
      ],
      expected: 3,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = numIslands(scenerio.grid);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
