import { test, describe, expect } from "vitest";
import { twoSum } from "./two-sum";

describe("two sum", () => {
  const scenerios = [
    {
      name: "when first and second element makes the target",
      array: [2, 7, 11, 15],
      target: 9,
      expected: [0, 1],
    },
    {
      name: "when second and third element makes the target",
      array: [3, 2, 4],
      target: 6,
      expected: [1, 2],
    },
    {
      name: "when first and second elements are same and add to target",
      array: [3, 3],
      target: 6,
      expected: [0, 1],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = twoSum(scenerio.array, scenerio.target);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
