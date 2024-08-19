import { test, describe, expect } from "vitest";
import { combinationSum2 } from "./combination-sum-2";
import { arraysMatch } from "../../../helpers/array-helpers";

describe("combination sum-2", () => {
  const scenerios = [
    {
      name: "4 combinations",
      candidates: [10, 1, 2, 7, 6, 1, 5],
      target: 8,
      expected: [
        [1, 1, 6],
        [1, 2, 5],
        [1, 7],
        [2, 6],
      ],
    },
    {
      name: "2 combinations",
      candidates: [2, 5, 2, 1, 2],
      target: 5,
      expected: [[1, 2, 2], [5]],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = combinationSum2(scenerio.candidates, scenerio.target);

      expect(arraysMatch(actual, scenerio.expected)).toBeTruthy();
    });
  }
});
