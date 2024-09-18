import { test, describe, expect } from "vitest";
import { generateReverseWholeNumbers } from "./generate-reverse-whole-numbers";

describe("generate reverse-whole-numbers", () => {
  const scenerios = [
    {
      name: "ex1",
      n: 4,
      expected: [4, 3, 2, 1],
    },
    {
      name: "ex2",
      n: 1,
      expected: [1],
    },
    {
      name: "ex3",
      n: 10,
      expected: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = generateReverseWholeNumbers(scenerio.n);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
