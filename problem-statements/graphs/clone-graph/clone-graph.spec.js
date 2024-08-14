import { expect, test, describe } from "vitest";
import {
  createUnidirectionalGraph,
  getArrayFromUnidirectionalGraph,
} from "../unidirectional-graph-from-array/unidirectional-graph-from-array";
import { cloneGraph } from "./clone-graph";

describe("clone graph", () => {
  const scenerios = [
    {
      name: "with 4 nodes",
      array: [
        [2, 4],
        [1, 3],
        [2, 4],
        [1, 3],
      ],
      expected: [
        [2, 4],
        [1, 3],
        [2, 4],
        [1, 3],
      ],
    },

    {
      name: "with 0 nodes",
      array: [[]],
      expected: [[]],
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
