import { test, describe, expect } from "vitest";
import { canConstruct } from "./ransom-note";

describe("ransom note", () => {
  const scenerios = [
    {
      name: "cannot be contructed",
      ransomNote: "a",
      magazine: "b",
      expected: false,
    },
    {
      name: "cannot be contructed",
      ransomNote: "aa",
      magazine: "ab",
      expected: false,
    },
    {
      name: "cab be contructed",
      ransomNote: "aa",
      magazine: "aab",
      expected: true,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = canConstruct(scenerio.ransomNote, scenerio.magazine);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
