import { test, describe, expect } from "vitest";
import { sortRecursive } from "./sort-recursive";

describe("sort recursive", () => {
  const scenerios = [
    {
      name: "ex1",
      nums: [1, 4, 2],
      expected: [1, 2, 4],
    },
    {
      name: "ex2",
      nums: [1, 2],
      expected: [1, 2],
    },
    {
      name: "ex2",
      nums: [0, 5, 2, 1, 6, 100, 9],
      expected: [0, 1, 2, 5, 6, 9, 100],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = sortRecursive(scenerio.nums);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
