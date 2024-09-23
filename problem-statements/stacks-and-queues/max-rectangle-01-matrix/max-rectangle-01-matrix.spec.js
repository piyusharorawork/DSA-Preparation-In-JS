import { test, describe, expect } from "vitest";
import { maximalRectangle } from "./max-rectangle-01-matrix";

describe("max rectangle-01-matrix", () => {
  const scenerios = [
    {
      name: "6",
      matrix: [
        ["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"],
      ],
      expected: 6,
    },
    {
      name: "0",
      matrix: [["0"]],
      expected: 0,
    },
    {
      name: "1",
      matrix: [["1"]],
      expected: 1,
    },
    {
      name: "1",
      matrix: [
        ["0", "1"],
        ["1", "0"],
      ],
      expected: 1,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = maximalRectangle(scenerio.matrix);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
