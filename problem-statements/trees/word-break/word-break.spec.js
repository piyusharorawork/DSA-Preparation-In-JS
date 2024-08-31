import { test, describe, expect } from "vitest";
import { wordBreak } from "./word-break";

describe("word break", () => {
  const scenerios = [
    {
      name: "can be done1",
      s: "leetcode",
      wordDict: ["leet", "code"],
      expected: true,
    },
    {
      name: "can be done2",
      s: "applepenapple",
      wordDict: ["apple", "pen"],
      expected: true,
    },
    {
      name: "can not be done",
      s: "catsandog",
      wordDict: ["cats", "dog", "sand", "and", "cat"],
      expected: false,
    },
    {
      name: "can be done",
      s: "aaaaaaa",
      wordDict: ["aaaa", "aaa"],
      expected: true,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = wordBreak(scenerio.s, scenerio.wordDict);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
