import { test, describe, expect } from "vitest";
import { findClosestElements } from "./k-closest-elements";

describe("k closest-elements", () => {
  const scenerios = [
    {
      name: "ex1",
      nums: [1, 2, 3, 4, 5],
      k: 4,
      x: 3,
      expected: [1, 2, 3, 4],
    },
    {
      name: "ex2",
      nums: [1, 1, 2, 3, 4, 5],
      k: 4,
      x: -1,
      expected: [1, 1, 2, 3],
    },
    {
      name: "ex3",
      nums: [1, 2, 3, 4, 5],
      k: 4,
      x: 3,
      expected: [1, 2, 3, 4],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = findClosestElements(scenerio.nums, scenerio.k, scenerio.x);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
