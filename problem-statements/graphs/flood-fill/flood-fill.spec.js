import { describe, test, expect } from "vitest";
import { floodFill } from "./flood-fill";

describe("flood fill", () => {
  const scenerios = [
    {
      name: "center",
      image: [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      sr: 1,
      sc: 1,
      color: 2,
      expected: [
        [2, 2, 2],
        [2, 2, 0],
        [2, 0, 1],
      ],
    },
    {
      name: "all 0 , no change",
      image: [
        [0, 0, 0],
        [0, 0, 0],
      ],
      sr: 0,
      sc: 0,
      color: 0,
      expected: [
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = floodFill(
        scenerio.image,
        scenerio.sr,
        scenerio.sc,
        scenerio.color
      );
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
