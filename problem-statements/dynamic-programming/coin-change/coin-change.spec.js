import { test, describe, expect } from "vitest";
import { coinChange } from "./coin-change";

describe("coin change", () => {
  const scenerios = [
    {
      name: "min 3 coins",
      coins: [1, 2, 5],
      amount: 11,
      expected: 3,
    },
    {
      name: "not possible coins",
      coins: [2],
      amount: 3,
      expected: -1,
    },
    {
      name: "0 coins",
      coins: [1],
      amount: 0,
      expected: 0,
    },
    {
      name: "4 coins",
      coins: [2, 5, 10, 1],
      amount: 27,
      expected: 4,
    },
    {
      name: "20 coins",
      coins: [186, 419, 83, 408],
      amount: 6249,
      expected: 20,
    },
    // {
    //   name: "20 coins with large value",
    //   coins: [411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422],
    //   amount: 9864,
    //   expected: 24,
    // },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = coinChange(scenerio.coins, scenerio.amount);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
