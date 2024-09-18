import { test, describe, expect } from "vitest";
import { removeMiddleStack } from "./remove-middle-stack";
import { Stack } from "../../../data-structures/stack/stack";

describe("remove middle-stack", () => {
  const scenerios = [
    {
      name: "ex1",
      nums: [1, 2, 3, 4, 5],
      expected: [1, 2, 4, 5],
    },
    {
      name: "ex2",
      nums: [1, 2, 3, 4, 5, 6],
      expected: [1, 2, 5, 6],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const stack = new Stack();
      for (const num of scenerio.nums) {
        stack.push(num);
      }
      const actual = removeMiddleStack(stack);
      expect(actual.elements).toStrictEqual(scenerio.expected);
    });
  }
});
