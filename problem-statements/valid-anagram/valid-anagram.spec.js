import { test, describe, expect } from "vitest";
import { isAnagram } from "./valid-anagram";

describe("valid anagram", () => {
  const scenerios = [
    {
      name: "is anagram",
      s: "anagram",
      t: "nagaram",
      expected: true,
    },
    {
      name: "is not anagram",
      s: "rat",
      t: "car",
      expected: false,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = isAnagram(scenerio.s, scenerio.t);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
