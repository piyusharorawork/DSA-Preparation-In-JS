import { test, describe, expect } from "vitest";
import { detectAcyclic } from "./detect-uag";
import { createGraph } from "../../../data-structures/graph";

describe("detect uag", () => {
  const scenerios = [
    {
      name: "uag = true",
      values: [[2], [1, 3, 4], [2], [5, 2], [4]],
      expected: true,
    },
    {
      name: "uag = false",
      values: [[2], [1, 3, 4], [2, 4], [3, 2, 5], [4]],
      expected: false,
    },
    {
      name: "uag = false",
      values: [[2, 5], [1, 4], [2], [2, 5], [1, 4]],
      expected: false,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const graph = createGraph(scenerio.values);
      const actual = detectAcyclic(graph);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
