import { expect, test, describe } from "vitest";
import { createGraph } from "./graph";
import { convertGraphToArray } from "../../helpers/graph-helpers";

describe("implement graph from array", () => {
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
      const array = convertGraphToArray(graph);
      expect(array).toStrictEqual(scenerio.expected);
    });
  }
});
