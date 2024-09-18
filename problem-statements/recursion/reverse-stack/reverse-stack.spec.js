import { test, describe, expect } from "vitest";
import { reverseStack } from "./reverse-stack";
import { Stack } from "../../../data-structures/stack/stack";

describe("reverse stack", () => {
  const scenerios = [
    {
      name: "ex1",
      nums: [1, 2, 3, 4, 5],
      expected: [5, 4, 3, 2, 1],
    },
    {
      name: "ex2",
      nums: [1, 2, 3],
      expected: [3, 2, 1],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const stack = new Stack();
      for (const num of scenerio.nums) {
        stack.push(num);
      }
      reverseStack(stack);
      expect(stack.elements).toStrictEqual(scenerio.expected);
    });
  }
});
