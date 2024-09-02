import { test, describe, expect } from "vitest";
import { longestCommonSubstring } from "./longest-common-substring";

describe("longest common-substring", () => {
  const scenerios = [
    {
      name: "5",
      text1: "GeeksforGeeks",
      text2: "GeeksQuiz",
      expected: 5,
    },
    {
      name: "5",
      text1: "abcds1s2z",
      text2: "s1s2zabcd",
      expected: 5,
    },
    {
      name: "0",
      text1: "abc",
      text2: "",
      expected: 0,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = longestCommonSubstring(scenerio.text1, scenerio.text2);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
