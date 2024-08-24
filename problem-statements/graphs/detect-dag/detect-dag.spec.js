import { test, describe, expect } from "vitest";
import { detectDag } from "./detect-dag";
import { createGraph } from "../../../data-structures/graph/graph";

describe("detect dag", () => {
  const scenerios = [
    {
      name: "is dag",
      values: [[2, 4], [3], [4], [5], []],
      expected: true,
    },
    {
      name: "not dag",
      values: [[2], [3], [4], [1, 5], []],
      expected: false,
    },
    {
      name: "not dag",
      values: [[2], [3, 4], [], [5], [1]],
      expected: false,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const graph = createGraph(scenerio.values);
      const actual = detectDag(graph);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
