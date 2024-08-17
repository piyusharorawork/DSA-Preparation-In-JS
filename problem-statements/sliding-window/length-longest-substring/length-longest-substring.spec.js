import { test, describe, expect } from "vitest";
import { lengthOfLongestSubstring } from "./length-longest-substring";

describe("length longest-substring", () => {
  const scenerios = [
    {
      name: "length =3",
      s: "abcabcbb",
      expected: 3,
    },
    {
      name: "length =1",
      s: "bbbbb",
      expected: 1,
    },
    {
      name: "length =3",
      s: "pwwkew",
      expected: 3,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = lengthOfLongestSubstring(scenerio.s);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
