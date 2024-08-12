import { test, describe, expect } from "vitest";
import { longestPalindrome } from "./longest-palindrome";

describe("longest palinrome", () => {
  const scenerios = [
    {
      name: "length 7",
      s: "abccccdd",
      expected: 7,
    },
    {
      name: "length 1",
      s: "a",
      expected: 1,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = longestPalindrome(scenerio.s);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
