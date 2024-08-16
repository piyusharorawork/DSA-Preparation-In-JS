import { test, describe, expect } from "vitest";
import { productExceptSelf } from "./product-except-self";

describe("product except self", () => {
  const scenerios = [
    {
      name: "when it does not contain 0 ",
      nums: [1, 2, 3, 4],
      expected: [24, 12, 8, 6],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = productExceptSelf(scenerio.nums);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
