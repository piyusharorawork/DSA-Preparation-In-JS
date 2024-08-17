import { expect, test, describe } from "vitest";
import { canFinish } from "./course-schedule";

describe("course schedule", () => {
  const scenerios = [
    {
      name: "can be finished",
      numCourses: 2,
      prerequisites: [[1, 0]],
      expected: true,
    },
    {
      name: "cannot be finished",
      numCourses: 2,
      prerequisites: [
        [1, 0],
        [0, 1],
      ],
      expected: false,
    },
    {
      name: "cannot be finished",
      numCourses: 20,
      prerequisites: [
        [0, 10],
        [3, 18],
        [5, 5],
        [6, 11],
        [11, 14],
        [13, 1],
        [15, 1],
        [17, 4],
      ],
      expected: false,
    },
    {
      name: "cannot be finished",
      numCourses: 4,
      prerequisites: [
        [2, 0],
        [1, 0],
        [3, 1],
        [3, 2],
        [1, 3],
      ],
      expected: false,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = canFinish(scenerio.numCourses, scenerio.prerequisites);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
