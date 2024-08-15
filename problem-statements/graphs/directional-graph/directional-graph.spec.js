import { expect, test, describe } from "vitest";
import {
  createDirectedGraph,
  getArrayFromDirectedGraph,
} from "./directional-graph";

describe("directional graph", () => {
  const scenerios = [
    {
      name: "4 nodes",
      adjacencyList: [[2, 3], [4], [4], []],
      expected: [[2, 3], [4], [4], []],
    },
    {
      name: "empty",
      adjacencyList: [],
      expected: [],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const graph = createDirectedGraph(scenerio.adjacencyList);
      const adjacenctList = getArrayFromDirectedGraph(graph);
      expect(adjacenctList).toStrictEqual(scenerio.expected);
    });
  }
});
