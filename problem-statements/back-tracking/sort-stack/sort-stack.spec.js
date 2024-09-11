import { test, describe, expect } from "vitest";
import { sortStack } from "./sort-stack";
import { Stack } from "../../../data-structures/stack/stack";

describe("sort stack", () => {
  const scenerios = [
    {
      name: "ex1",
      nums: [1, 5, 2, 3, 100],
      expected: [1, 2, 3, 5, 100],
    },
    {
      name: "ex2",
      nums: [1, 100, 2],
      expected: [1, 2, 100],
    },
    {
      name: "ex3",
      nums: [1, 2, 6, 7, 4, 5, 0, 1, 1, 3],
      expected: [0, 1, 1, 1, 2, 3, 4, 5, 6, 7],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const stack = new Stack();
      for (const num of scenerio.nums) {
        stack.push(num);
      }
      const actualStack = sortStack(stack);
      expect(actualStack.elements).toStrictEqual(scenerio.expected);
    });
  }
});
