import { test, describe, expect } from "vitest";
import { uniquePaths } from "./unique-paths";

describe("unique paths", () => {
  const scenerios = [
    {
      name: "28 paths",
      m: 3,
      n: 7,
      expected: 28,
    },
    {
      name: "3 paths",
      m: 3,
      n: 2,
      expected: 3,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = uniquePaths(scenerio.m, scenerio.n);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
