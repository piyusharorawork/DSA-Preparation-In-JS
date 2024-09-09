import { test, describe, expect } from "vitest";
import { change } from "./max-ways-coins-change";

describe("max ways-coins-change", () => {
  const scenerios = [
    {
      name: "ways = 5",
      amount: 5,
      coins: [1, 2, 3],
      expected: 5,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = change(scenerio.amount, scenerio.coins);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
