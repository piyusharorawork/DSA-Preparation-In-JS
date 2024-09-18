import { test, describe, expect } from "vitest";
import { calculateFactorial } from "./calculate-factorial";

describe("calculate factorial", () => {
  const scenerios = [
    {
      name: "ex1",
      n: 4,
      expected: 24,
    },
    {
      name: "ex2",
      n: 2,
      expected: 2,
    },
    {
      name: "ex3",
      n: 1,
      expected: 1,
    },
    {
      name: "ex4",
      n: 10,
      expected: 3628800,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = calculateFactorial(scenerio.n);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
