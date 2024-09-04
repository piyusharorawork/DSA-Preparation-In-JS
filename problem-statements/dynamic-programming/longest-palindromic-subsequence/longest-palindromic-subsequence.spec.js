import { test, describe, expect } from "vitest";
import { longestPalindromeSubseq } from "./longest-palindromic-subsequence";

describe("longest palindromic-subsequence", () => {
  const scenerios = [
    {
      name: "4",
      s: "bbbab",
      expected: 4,
    },
    {
      name: "2",
      s: "cbbd",
      expected: 2,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = longestPalindromeSubseq(scenerio.s);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
