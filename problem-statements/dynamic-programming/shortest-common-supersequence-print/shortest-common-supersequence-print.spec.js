import { test, describe, expect } from "vitest";
import { shortestCommonSupersequence } from "./shortest-common-supersequence-print";

describe("shortest common-supersequence-print", () => {
  const scenerios = [
    {
      name: "5",
      text1: "abac",
      text2: "cab",
      expected: "cabac",
    },
    {
      name: "8",
      text1: "aaaaaaaa",
      text2: "aaaaaaaa",
      expected: "aaaaaaaa",
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = shortestCommonSupersequence(
        scenerio.text1,
        scenerio.text2
      );
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
