import { test, describe, expect } from "vitest";
import { topKFrequent } from "./top-k-frequent-words";

describe("top k-frequent-words", () => {
  const scenerios = [
    {
      name: "ex1",
      words: ["i", "love", "leetcode", "i", "love", "coding"],
      k: 2,
      expected: ["i", "love"],
    },
    {
      name: "ex2",
      words: [
        "the",
        "day",
        "is",
        "sunny",
        "the",
        "the",
        "the",
        "sunny",
        "is",
        "is",
      ],
      k: 4,
      expected: ["the", "is", "sunny", "day"],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = topKFrequent(scenerio.words, scenerio.k);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
