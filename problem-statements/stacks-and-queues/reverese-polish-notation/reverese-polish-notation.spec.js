import { test, describe, expect } from "vitest";
import { evalRPN } from "./reverese-polish-notation";

describe("reverese polish-notation", () => {
  const scenerios = [
    {
      name: "5 tokens",
      tokens: ["2", "1", "+", "3", "*"],
      expected: 9,
    },
    {
      name: "5 tokens with division",
      tokens: ["4", "13", "5", "/", "+"],
      expected: 6,
    },
    {
      name: "13 tokens with division",
      tokens: [
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
      ],
      expected: 22,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = evalRPN(scenerio.tokens);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
