import { test, describe, expect } from "vitest";
import { isPalindrome } from "./valid-palindrome";

describe("valid palindrome", () => {
  const scenerios = [
    {
      name: "valid",
      s: "A man, a plan, a canal: Panama",
      expected: true,
    },
    {
      name: "not valid",
      s: "race a car",
      expected: false,
    },
    {
      name: "empty",
      s: " ",
      expected: true,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = isPalindrome(scenerio.s);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
