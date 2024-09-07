import { test, describe, expect } from "vitest";
import { StockSpanner } from "./online-stock-plan";

describe("online stock-plan", () => {
  const scenerios = [
    {
      name: "ex1",
      operations: [
        "StockSpanner",
        "next",
        "next",
        "next",
        "next",
        "next",
        "next",
        "next",
      ],
      inputs: [[], [100], [80], [60], [70], [60], [75], [85]],
      expected: [null, 1, 1, 1, 2, 1, 4, 6],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const stockSpanner = new StockSpanner();
      for (let i = 1; i < scenerio.operations.length; i++) {
        const operation = scenerio.operations[i];
        const input = scenerio.inputs[i][0];
        expect(stockSpanner.next(input)).toBe(scenerio.expected[i]);
      }
    });
  }
});
