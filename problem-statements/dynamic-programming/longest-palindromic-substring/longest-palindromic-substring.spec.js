import { test, describe, expect } from "vitest";
import { longestPalindrome } from "./longest-palindromic-substring";

describe("longest palindromic-substring", () => {
  const scenerios = [
    {
      name: "3",
      s: "babad",
      expected: "bab",
    },
    {
      name: "2",
      s: "cbbd",
      expected: "bb",
    },
    {
      name: "3",
      s: "aacabdkacaa",
      expected: "aca",
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = longestPalindrome(scenerio.s);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
