import { test, describe, expect } from "vitest";
import { powerSetRecursion } from "./power-set-recursion";

describe("power set-recursion", () => {
  const scenerios = [
    {
      name: "ex1",
      s: "abc",
      expected: ["", "a", "b", "c", "ab", "ac", "bc", "abc"],
    },
    {
      name: "ex2",
      s: "abcd",
      expected: [
        "",
        "a",
        "ab",
        "abc",
        "abcd",
        "abd",
        "ac",
        "acd",
        "ad",
        "b",
        "bc",
        "bcd",
        "bd",
        "c",
        "cd",
        "d",
      ],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = powerSetRecursion(scenerio.s);

      expect(actual.sort()).toStrictEqual(scenerio.expected.sort());
    });
  }
});
