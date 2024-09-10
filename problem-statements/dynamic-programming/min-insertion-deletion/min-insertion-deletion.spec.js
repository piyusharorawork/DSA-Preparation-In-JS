import { test, describe, expect } from "vitest";
import { minInsertionDeletion } from "./min-insertion-deletion";

describe("min insertion-deletion", () => {
  const scenerios = [
    {
      name: "ex1",
      str1: "heap",
      str2: "pea",
      expected: [2, 1],
    },
    {
      name: "ex2",
      str1: "geeksforgeeks",
      str2: "geeks",
      expected: [8, 0],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = minInsertionDeletion(scenerio.str1, scenerio.str2);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
