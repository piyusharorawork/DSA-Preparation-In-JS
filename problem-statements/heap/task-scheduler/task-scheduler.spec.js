import { test, describe, expect } from "vitest";
import { leastInterval } from "./task-scheduler";

describe("task scheduler", () => {
  const scenerios = [
    {
      name: "8 intervals",
      tasks: ["A", "A", "A", "B", "B", "B"],
      n: 2,
      expected: 8,
    },
    {
      name: "6 intervals",
      tasks: ["A", "C", "A", "B", "D", "B"],
      n: 1,
      expected: 6,
    },
    {
      name: "10 intervals",
      tasks: ["A", "A", "A", "B", "B", "B"],
      n: 3,
      expected: 10, // A -> B -> GAP -> GAP -> A -> B -> GAP -> GAP -> A -> B
    },
    {
      name: "12 intervals",
      tasks: ["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"],
      n: 2,
      expected: 12,
    },
    {
      name: "3 intervals",
      tasks: ["A", "A", "A"],
      n: 1,
      expected: 5,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = leastInterval(scenerio.tasks, scenerio.n);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
