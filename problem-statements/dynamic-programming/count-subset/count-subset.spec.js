import { test, describe, expect } from "vitest";
import { countSubset } from "./count-subset";

describe("count subset", () => {
  const scenerios = [
    {
      name: "count 2",
      nums: [2, 3, 5, 6, 8, 10],
      target: 10,
      expected: 3,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = countSubset(scenerio.nums, scenerio.target);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
