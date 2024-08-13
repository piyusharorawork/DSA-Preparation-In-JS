import { describe, test, expect } from "vitest";
import { updateMatrix } from "./matrix-01";

describe("matrix 01", () => {
  const scenerios = [
    {
      name: "only single 1 at center",
      mat: [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ],
      expected: [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ],
    },
    {
      name: "multiple 1s and 0s",
      mat: [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
      ],
      expected: [
        [0, 0, 0],
        [0, 1, 0],
        [1, 2, 1],
      ],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = updateMatrix(scenerio.mat);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
