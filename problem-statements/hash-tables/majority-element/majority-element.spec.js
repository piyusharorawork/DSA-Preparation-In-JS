import { expect, describe, test } from "vitest";
import { majorityElement } from "./majority-element";

describe("majority element", () => {
  const scenerios = [
    {
      name: "repeated twice",
      nums: [3, 2, 3],
      expected: 3,
    },
    {
      name: "repeated 4 time",
      nums: [2, 2, 1, 1, 1, 2, 2],
      expected: 2,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = majorityElement(scenerio.nums);
      expect(actual).toBe(scenerio.expected);
    });
  }
});
