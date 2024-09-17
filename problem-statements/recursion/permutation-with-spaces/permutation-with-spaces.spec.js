import { test, describe, expect } from "vitest";
import { permutationWithSpaces } from "./permutation-with-spaces";

describe("permutation with-spaces", () => {
  const scenerios = [
    {
      name: "ex1",
      s: "ABC",
      expected: ["A B C", "A BC", "AB C", "ABC"],
    },
    {
      name: "ex2",
      s: "BBR",
      expected: ["B B R", "B BR", "BB R", "BBR"],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = permutationWithSpaces(scenerio.s);
      expect(actual.sort()).toStrictEqual(scenerio.expected.sort());
    });
  }
});
