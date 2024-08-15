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
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const graph = createUnidirectionalGraph(scenerio.array);
      const clonedGraph = cloneGraph(graph);
      const clonedGraphArray = getArrayFromUnidirectionalGraph(clonedGraph);
      expect(clonedGraphArray).toStrictEqual(scenerio.expected);
    });
  }
});
