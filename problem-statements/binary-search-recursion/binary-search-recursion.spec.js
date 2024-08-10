import { test, describe, expect } from "vitest";
import { search } from "./binary-search-recursion";

describe("binary search recursion", () => {
  const scenerios = [
    {
      name: "when element exists",
      array: [-100, -50, 0, 20, 29, 30, 52],
      target: 29,
      expected: 4,
    },
    {
      name: "when element does not exists",
      array: [-100, -50, 0, 20, 29, 30, 52],
      target: 55,
      expected: -1,
    },
    {
      name: "only one element exists",
      array: [-100],
      target: -100,
      expected: 0,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = search(scenerio.array, scenerio.target);
      expect(actual).toBe(scenerio.expected);
    });
  }
});
