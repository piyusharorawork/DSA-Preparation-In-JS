import { test, describe, expect } from "vitest";
import { kClosest } from "./k-closest-points";
import { arraysMatch } from "../../../helpers/array-helpers";

describe("k closest-points", () => {
  const scenerios = [
    {
      name: "2 points",
      points: [
        [1, 3],
        [-2, 2],
      ],
      k: 1,
      expected: [[-2, 2]],
    },
    {
      name: "3 points",
      points: [
        [3, 3],
        [5, -1],
        [-2, 4],
      ],
      k: 2,
      expected: [
        [3, 3],
        [-2, 4],
      ],
    },
    {
      name: "10 points",
      points: [
        [-95, 76],
        [17, 7],
        [-55, -58],
        [53, 20],
        [-69, -8],
        [-57, 87],
        [-2, -42],
        [-10, -87],
        [-36, -57],
        [97, -39],
        [97, 49],
      ],
      k: 5,
      expected: [
        [17, 7],
        [-2, -42],
        [53, 20],
        [-36, -57],
        [-69, -8],
      ],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = kClosest(scenerio.points, scenerio.k);
      expect(arraysMatch(actual, scenerio.expected)).toBeTruthy();
    });
  }
});
