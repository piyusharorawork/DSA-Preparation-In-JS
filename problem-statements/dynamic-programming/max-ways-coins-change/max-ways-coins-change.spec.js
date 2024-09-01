import { test, describe, expect } from "vitest";
import { maxWaysCoinsChange } from "./max-ways-coins-change";

describe("max ways-coins-change", () => {
  const scenerios = [
    {
      name: "ways = 5",
      coins: [1, 2, 3],
      sum: 5,
      expected: 5,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = maxWaysCoinsChange(scenerio.coins, scenerio.sum);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
