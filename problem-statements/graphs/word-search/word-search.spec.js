import { test, describe, expect } from "vitest";
import { exist } from "./word-search";

describe("word search", () => {
  const scenerios = [
    {
      name: "exists",
      board: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      word: "ABCCED",
      expected: true,
    },
    {
      name: "exists",
      board: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      word: "SEE",
      expected: true,
    },
    {
      name: "exists",
      board: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      word: "ABCB",
      expected: false,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = exist(scenerio.board, scenerio.word);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
