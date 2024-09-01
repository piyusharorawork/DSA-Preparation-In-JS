import { test, describe, expect } from "vitest";
import { longestCommonSubsequence } from "./longest-common-subsequence";

describe("lowest common-subsequence", () => {
  const scenerios = [
    {
      name: "3",
      text1: "abcde",
      text2: "ace",
      expected: 3,
    },
    {
      name: "3",
      text1: "abc",
      text2: "abc",
      expected: 3,
    },
    {
      name: "0",
      text1: "abc",
      text2: "def",
      expected: 0,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = longestCommonSubsequence(scenerio.text1, scenerio.text2);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
