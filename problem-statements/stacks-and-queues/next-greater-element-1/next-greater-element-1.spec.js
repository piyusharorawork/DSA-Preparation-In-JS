import { test, describe, expect } from "vitest";
import { nextGreaterElement } from "./next-greater-element-1";

describe("next greater-element-1", () => {
  const scenerios = [
    {
      name: "ex1",
      nums1: [4, 1, 2],
      nums2: [1, 3, 4, 2],
      expected: [-1, 3, -1],
    },
    // {
    //   name: "ex2",
    //   nums1: [2, 4],
    //   nums2: [1, 2, 3, 4],
    //   expected: [3, -1],
    // },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = nextGreaterElement(scenerio.nums1, scenerio.nums2);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
