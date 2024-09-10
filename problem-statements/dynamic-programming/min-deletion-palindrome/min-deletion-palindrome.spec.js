import { test, describe, expect } from "vitest";
import { minDeletionPalindrome } from "./min-deletion-palindrome";

describe("min deletion-palindrome", () => {
  const scenerios = [
    {
      name: "ex1",
      str: "aebcbda",
      expected: 2,
    },
    {
      name: "ex2",
      str: "geeksforgeeks",
      expected: 8,
    },
    {
      name: "ex3",
      str: "agbcba",
      expected: 1,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = minDeletionPalindrome(scenerio.str);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
