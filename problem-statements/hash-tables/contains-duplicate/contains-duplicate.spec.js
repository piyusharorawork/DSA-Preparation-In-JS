import { test, describe, expect } from "vitest";
import { containsDuplicate } from "./contains-duplicate";

describe("contains duplicate", () => {
  const scenerios = [
    {
      name: "contains",
      nums: [1, 2, 3, 1],
      expected: true,
    },
    {
      name: "not contains",
      nums: [1, 2, 3, 4],
      expected: false,
    },
    {
      name: "contains",
      nums: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
      expected: true,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = containsDuplicate(scenerio.nums);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
