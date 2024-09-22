import { test, describe, expect } from "vitest";
import { shortestPathBinaryMatrix } from "./shortest-path-binary-matrix";

describe("shortest path-binary-matrix", () => {
  const scenerios = [
    {
      name: "ex1",
      grid: [
        [0, 1],
        [1, 0],
      ],
      expected: 2,
    },
    {
      name: "ex2",
      grid: [
        [0, 0, 0],
        [1, 1, 0],
        [1, 1, 0],
      ],
      expected: 4,
    },
    {
      name: "ex2",
      grid: [
        [1, 0, 0],
        [1, 1, 0],
        [1, 1, 0],
      ],
      expected: -1,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = shortestPathBinaryMatrix(scenerio.grid);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
