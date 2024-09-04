import { test, describe, expect } from "vitest";
import { smallerElementLeft } from "./smaller-element-left";

describe("smaller element-left", () => {
  const scenerios = [
    {
      name: "ex1",
      nums: [1, 6, 4, 10, 2, 5],
      expected: [-1, 1, 1, 4, 1, 2],
    },
    {
      name: "ex2",
      nums: [1, 3, 0, 2, 5],
      expected: [-1, 1, -1, 0, 2],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = smallerElementLeft(scenerio.nums);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
