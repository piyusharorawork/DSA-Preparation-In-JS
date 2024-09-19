import { test, describe, expect } from "vitest";
import { combinationSum } from "./combination-sum";
import { arraysMatch } from "../../../helpers/array-helpers";

describe("combination sum 1", () => {
  const scenerios = [
    {
      name: "2 combinations",
      candidates: [2, 3, 6, 7],
      target: 7,
      expected: [[2, 2, 3], [7]],
    },
    {
      name: "3 combinations",
      candidates: [2, 3, 5],
      target: 8,
      expected: [
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5],
      ],
    },
    {
      name: "0 combinations",
      candidates: [2],
      target: 1,
      expected: [],
    },
    {
      name: "3 combinations un sorted",
      candidates: [3, 2, 5],
      target: 8,
      expected: [
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5],
      ],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = combinationSum(scenerio.candidates, scenerio.target);
      expect(arraysMatch(actual, scenerio.expected)).toBeTruthy();
    });
  }
});
