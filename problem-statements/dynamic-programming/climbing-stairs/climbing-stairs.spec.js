import { test, describe, expect } from "vitest";
import { climbStairs } from "./climbing-stairs";

describe("climbing stairs", () => {
  const scenerios = [
    {
      name: "2 steps",
      n: 2,
      expected: 2,
    },
    {
      name: "3 steps",
      n: 3,
      expected: 3,
    },
    {
      name: "4 steps",
      n: 4,
      expected: 5,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = climbStairs(scenerio.n);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
