import { test, describe, expect } from "vitest";
import { generateParenthesis } from "./generate-parenthesis";

describe("generate parenthesis", () => {
  const scenerios = [
    {
      name: "ex1",
      n: 3,
      expected: ["((()))", "(()())", "(())()", "()(())", "()()()"],
    },
    {
      name: "ex2",
      n: 1,
      expected: ["()"],
    },
    {
      name: "ex3",
      n: 2,
      expected: ["(())", "()()"],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = generateParenthesis(scenerio.n);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
