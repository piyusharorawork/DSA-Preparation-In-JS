import { test, describe, expect } from "vitest";
import { longestCommonSubsequencePrint } from "./longest-common-subsequence-print";

describe("longest common-subsequence-print", () => {
  const scenerios = [
    {
      name: "3",
      text1: "abcde",
      text2: "ace",
      expected: "ace",
    },
    {
      name: "3",
      text1: "abc",
      text2: "abc",
      expected: "abc",
    },
    {
      name: "0",
      text1: "abc",
      text2: "def",
      expected: "",
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = longestCommonSubsequencePrint(
        scenerio.text1,
        scenerio.text2
      );
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
