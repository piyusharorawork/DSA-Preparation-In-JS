import { test, describe, expect } from "vitest";
import { finalPrices } from "./final-prices-with-discounts";

describe("final prices-with-discounts", () => {
  const scenerios = [
    {
      name: "ex1",
      prices: [8, 4, 6, 2, 3],
      expected: [4, 2, 4, 2, 3],
    },
    {
      name: "ex2",
      prices: [1, 2, 3, 4, 5],
      expected: [1, 2, 3, 4, 5],
    },
    {
      name: "ex3",
      prices: [10, 1, 1, 6],
      expected: [9, 0, 1, 6],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = finalPrices(scenerio.prices);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
