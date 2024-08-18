import { test, describe, expect } from "vitest";
import { findAnagrams } from "./find-all-anagrams";

describe("find all-anagrams", () => {
  const scenerios = [
    {
      name: "2 anagrams",
      s: "cbaebabacd",
      p: "abc",
      expected: [0, 6],
    },
    {
      name: "3 anagrams",
      s: "abab",
      p: "ab",
      expected: [0, 1, 2],
    },
    {
      name: "1 anagram",
      s: "baa",
      p: "aa",
      expected: [1],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = findAnagrams(scenerio.s, scenerio.p);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
