import { test, describe, expect } from "vitest";
import { generateWholeNumbers } from "./generate-whole-numbers";

describe("generate whole-numbers", () => {
  const scenerios = [
    {
      name: "ex1",
      n: 5,
      expected: [1, 2, 3, 4, 5],
    },
    {
      name: "ex2",
      n: 1,
      expected: [1],
    },
    {
      name: "ex3",
      n: 1,
      expected: [1],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = generateWholeNumbers(scenerio.n);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
