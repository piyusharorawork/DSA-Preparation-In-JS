import { test, describe, expect } from "vitest";
import { longestSubsequenceRepeatedK } from "./longest-subsequence-repeated-ktimes";

describe("longest subsequence-repeated-ktimes", () => {
  const scenerios = [
    {
      name: "ex1",
      s: "letsleetcode",
      k: 2,
      expected: "let",
    },
    {
      name: "ex2",
      s: "bb",
      k: 2,
      expected: "b",
    },
    {
      name: "ex3",
      s: "ab",
      k: 2,
      expected: "",
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = longestSubsequenceRepeatedK(scenerio.s, scenerio.k);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
