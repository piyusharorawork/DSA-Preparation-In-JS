import { test, describe, expect } from "vitest";
import { kthGrammar } from "./kth-symbol-grammer";

describe("kth symbol-grammer", () => {
  const scenerios = [
    {
      name: "ex1",
      n: 1,
      k: 1,
      expected: 0,
    },
    {
      name: "ex2",
      n: 2,
      k: 1,
      expected: 0,
    },
    {
      name: "ex3",
      n: 2,
      k: 2,
      expected: 1,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = kthGrammar(scenerio.n, scenerio.k);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
