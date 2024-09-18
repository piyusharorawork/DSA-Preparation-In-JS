import { test, describe, expect } from "vitest";
import { safePosition } from "./safe-position";

describe("safe position", () => {
  const scenerios = [
    {
      name: "ex1",
      n: 2,
      k: 1,
      expected: 2,
    },
    {
      name: "ex2",
      n: 4,
      k: 2,
      expected: 1,
    },
    {
      name: "ex3",
      n: 5,
      k: 2,
      expected: 3,
    },
    // {
    //   name: "ex4",
    //   n: 40,
    //   k: 7,
    //   expected: 24,
    // },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = safePosition(scenerio.n, scenerio.k);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
