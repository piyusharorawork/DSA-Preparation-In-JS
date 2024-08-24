import { expect, test, describe } from "vitest";
import { cloneGraph } from "./clone-graph";
import { createGraph } from "../../../data-structures/graph/graph";
import { convertGraphToArray } from "../../../helpers/graph-helpers";

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
      const graph = createGraph(scenerio.array);
      const clonedGraph = cloneGraph(graph);
      const clonedGraphArray = convertGraphToArray(clonedGraph);
      expect(clonedGraphArray).toStrictEqual(scenerio.expected);
    });
  }
});
