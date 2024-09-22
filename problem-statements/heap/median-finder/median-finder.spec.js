import { test, describe, expect } from "vitest";
import { MedianFinder } from "./median-finder";

describe("median finder", () => {
  const scenerios = [
    // {
    //   name: "example 1",
    //   operations: ["addNum", "addNum", "findMedian", "addNum", "findMedian"],
    //   inputs: [[1], [2], [], [3], []],
    //   expected: [null, null, 1.5, null, 2.0],
    // },
    {
      name: "example 2",
      operations: [
        "addNum",
        "addNum",
        "addNum",
        "addNum",
        "addNum",
        "addNum",
        "findMedial",
      ],
      inputs: [[2], [3], [4], [5], [10], [20], []],
      expected: [null, null, null, null, null, null, 4.5],
    },
    // {
    //   name: "example 3",
    //   operations: [
    //     "addNum",
    //     "findMedian",
    //     "addNum",
    //     "findMedian",
    //     "addNum",
    //     "findMedian",
    //     "addNum",
    //     "findMedian",
    //     "addNum",
    //     "findMedian",
    //     "addNum",
    //     "findMedian",
    //     "addNum",
    //     "findMedian",
    //     "addNum",
    //     "findMedian",
    //     "addNum",
    //     "findMedian",
    //     "addNum",
    //     "findMedian",
    //     "addNum",
    //     "findMedian",
    //   ],
    //   inputs: [
    //     [6],
    //     [],
    //     [10],
    //     [],
    //     [2],
    //     [],
    //     [6],
    //     [],
    //     [5],
    //     [],
    //     [0],
    //     [],
    //     [6],
    //     [],
    //     [3],
    //     [],
    //     [1],
    //     [],
    //     [0],
    //     [],
    //     [0],
    //     [],
    //   ],
    //   expected: [
    //     null,
    //     6.0,
    //     null,
    //     8.0,
    //     null,
    //     6.0,
    //     null,
    //     6.0,
    //     null,
    //     6.0,
    //     null,
    //     5.5,
    //     null,
    //     6.0,
    //     null,
    //     5.5,
    //     null,
    //     5.0,
    //     null,
    //     4.0,
    //     null,
    //     3.0,
    //   ],
    // },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const medianFinder = new MedianFinder();
      const N = scenerio.operations.length;

      for (let i = 0; i < N; i++) {
        const operation = scenerio.operations[i];
        const input = scenerio.inputs[i][0];
        const expectedVal = scenerio.expected[i];

        if (operation === "addNum") {
          medianFinder.addNum(input);
        } else if (operation === "findMedial") {
          expect(medianFinder.findMedian()).toBe(expectedVal);
        }
      }
    });
  }
});
