import { test, describe, expect } from "vitest";
import { jobScheduling } from "./max-profit-job-scheduling";

describe("max profit-job-scheduling", () => {
  const scenerios = [
    {
      name: "120",
      startTime: [1, 2, 3, 3],
      endTime: [3, 4, 5, 6],
      profit: [50, 10, 40, 70],
      expected: 120,
    },
    {
      name: "150",
      startTime: [1, 2, 3, 4, 6],
      endTime: [3, 5, 10, 6, 9],
      profit: [20, 20, 100, 70, 60],
      expected: 150,
    },
    {
      name: "6",
      startTime: [1, 1, 1],
      endTime: [2, 3, 4],
      profit: [5, 6, 4],
      expected: 6,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = jobScheduling(
        scenerio.startTime,
        scenerio.endTime,
        scenerio.profit
      );
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
