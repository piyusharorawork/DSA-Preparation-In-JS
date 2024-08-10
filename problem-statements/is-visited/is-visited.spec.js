import { isVisited } from "./is-visited";
import { test, describe, expect } from "vitest";

describe("is visted", () => {
  const scenerios = [
    {
      name: "when element exists",
      array: [1, 5, 3, 6, 9, 0, 2],
      element: 3,
      expected: true,
    },
    {
      name: "when element does not exists",
      array: [1, 5, 3, 6, 9, 0, 2],
      element: 4,
      expected: false,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = isVisited(scenerio.array, scenerio.element);
      expect(actual).toBe(scenerio.expected);
    });
  }
});
