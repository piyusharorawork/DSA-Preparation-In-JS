import { test, describe, expect } from "vitest";
import { nextPermutation } from "./next-permutation";

describe("next permutation", () => {
  const scenerios = [
    {
      name: "ex1",
      nums: [1, 2, 3],
      expected: [1, 3, 2],
    },
    {
      name: "ex2",
      nums: [3, 2, 1],
      expected: [1, 2, 3],
    },
    {
      name: "ex3",
      nums: [1, 1, 5],
      expected: [1, 5, 1],
    },
    {
      name: "ex4",
      nums: [0, 1, 2, 5, 3, 3, 0],
      expected: [0, 1, 3, 0, 2, 3, 5],
    },
    {
      name: "ex5",
      nums: [1, 5, 1],
      expected: [5, 1, 1],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = nextPermutation(scenerio.nums);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
