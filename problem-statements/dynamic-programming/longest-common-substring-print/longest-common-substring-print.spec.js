import { test, describe, expect } from "vitest";
import { longestCommonSubstringPrint } from "./longest-common-substring-print";

describe("longest common-substring-print", () => {
  const scenerios = [
    {
      name: "5",
      text1: "GeeksforGeeks",
      text2: "GeeksQuiz",
      expected: "Geeks",
    },
    {
      name: "5",
      text1: "abcds1s2z",
      text2: "s1s2zabcd",
      expected: "s1s2z",
    },
    {
      name: "0",
      text1: "abc",
      text2: "",
      expected: "",
    },
    {
      name: "5",
      text1: "heklloasaroraoxxx",
      text2: "preetyarorayyyy",
      expected: "arora",
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = longestCommonSubstringPrint(
        scenerio.text1,
        scenerio.text2
      );
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
