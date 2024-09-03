import { test, describe, expect } from "vitest";
import { shortestCommonSupersequenceLength } from "./shortest-common-supersequence-length";

describe("shortest common-supersequence-length", () => {
  const scenerios = [
    {
      name: "length = 5",
      text1: "abac",
      text2: "cab",
      expected: 5,
    },
    {
      name: "length = 8",
      text1: "aaaaaaa",
      text2: "aaaaaaaa",
      expected: 8,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = shortestCommonSupersequenceLength(
        scenerio.text1,
        scenerio.text2
      );
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
