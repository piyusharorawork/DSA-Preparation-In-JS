import { test, describe, expect } from "vitest";
import { maxNumberKswaps } from "./max-number-kswaps";

describe("max number-kswaps", () => {
  const scenerios = [
    {
      name: "ex1",
      s: "1234567",
      k: 4,
      expected: "7654321",
    },
    {
      name: "ex2",
      s: "3435335",
      k: 3,
      expected: "5543333",
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = maxNumberKswaps(scenerio.s, scenerio.k);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
