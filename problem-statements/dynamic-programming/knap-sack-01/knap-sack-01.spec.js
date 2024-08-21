import { test, describe, expect } from "vitest";
import { maxProfit, maxProfitV1 } from "./knap-sack-01";

describe("knap sack-01", () => {
  const scenerios = [
    {
      name: "profit 9",
      itemCount: 4,
      itemWeights: [1, 3, 4, 5],
      itemPrices: [1, 4, 5, 7],
      bagCapcity: 7,
      expected: 9,
    },
    {
      name: "profit 10",
      itemCount: 4,
      itemWeights: [1, 3, 4, 10],
      itemPrices: [1, 5, 5, 7],
      bagCapcity: 7,
      expected: 10,
    },
    {
      name: "profit 0",
      itemCount: 4,
      itemWeights: [10, 30, 45, 10],
      itemPrices: [1, 5, 5, 7],
      bagCapcity: 7,
      expected: 0,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = maxProfit(
        scenerio.itemCount,
        scenerio.itemWeights,
        scenerio.itemPrices,
        scenerio.bagCapcity
      );
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
