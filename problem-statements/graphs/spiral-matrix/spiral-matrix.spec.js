import { test, describe, expect } from "vitest";
import { spiralOrder } from "./spiral-matrix";

describe("spiral matrix", () => {
  const scenerios = [
    {
      name: "3x3",
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      expected: [1, 2, 3, 6, 9, 8, 7, 4, 5],
    },
    {
      name: "4x4",
      matrix: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ],
      expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = spiralOrder(scenerio.matrix);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
