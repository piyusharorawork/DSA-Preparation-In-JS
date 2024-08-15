import { test, describe, expect } from "vitest";
import { search } from "./search-sorted-rotated";

describe("search sorted-rotated", () => {
  const scenerios = [
    {
      name: "element found",
      nums: [4, 5, 6, 7, 0, 1, 2],
      target: 0,
      expected: 4,
    },
    {
      name: "element  not found",
      nums: [4, 5, 6, 7, 0, 1, 2],
      target: 3,
      expected: -1,
    },
    {
      name: "element  not found",
      nums: [1],
      target: 0,
      expected: -1,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = search(scenerio.nums, scenerio.target);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
