import { test, describe, expect } from "vitest";
import { towerHanoi } from "./tower-hanoi";

describe("tower hanoi", () => {
  const scenerios = [
    {
      name: "1",
      n: 1,
      expected: ["Disk 1 moved from A to C"],
    },
    {
      name: "2",
      n: 2,
      expected: [
        "Disk 1 moved from A to B",
        "Disk 2 moved from A to C",
        "Disk 1 moved from B to C",
      ],
    },
    {
      name: "3",
      n: 3,
      expected: [
        "Disk 1 moved from A to C",
        "Disk 2 moved from A to B",
        "Disk 1 moved from C to B",
        "Disk 3 moved from A to C",
        "Disk 1 moved from B to A",
        "Disk 2 moved from B to C",
        "Disk 1 moved from A to C",
      ],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = towerHanoi(scenerio.n);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
