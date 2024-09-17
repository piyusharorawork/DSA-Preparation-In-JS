import { test, describe, expect } from "vitest";
import { addSpaces } from "./add-spaces-string";

describe("add spaces-string", () => {
  const scenerios = [
    {
      name: "ex1",
      s: "LeetcodeHelpsMeLearn",
      spaces: [8, 13, 15],
      expected: "Leetcode Helps Me Learn",
    },
    {
      name: "ex2",
      s: "icodeinpython",
      spaces: [1, 5, 7, 9],
      expected: "i code in py thon",
    },
    {
      name: "ex3",
      s: "spacing",
      spaces: [0, 1, 2, 3, 4, 5, 6],
      expected: " s p a c i n g",
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = addSpaces(scenerio.s, scenerio.spaces);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
