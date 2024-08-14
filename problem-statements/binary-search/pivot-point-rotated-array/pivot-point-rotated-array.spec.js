import { expect, describe, test } from "vitest";
import { getPivotPoint } from "./pivot-point-rotated-array";

describe("pivot point", () => {
  const scenerios = [
    {
      name: "10 elements",
      array: [7, 8, 9, 10, 1, 2, 3, 5],
      expected: 4,
    },
    {
      name: "3 elements",
      array: [100, 80, 99],
      expected: 1,
    },
    {
      name: "pivot = 5",
      array: [10, 12, 13, 17, 29, 4, 6, 8, 9],
      expected: 5,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = getPivotPoint(scenerio.array);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
