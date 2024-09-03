import { test, describe, expect } from "vitest";
import { minWindow } from "./minimum-window-substring";

describe("minimum window-substring", () => {
  const scenerios = [
    {
      name: "4",
      s: "ADOBECODEBANC",
      t: "ABC",
      expected: "BANC",
    },
    {
      name: "1",
      s: "a",
      t: "a",
      expected: "a",
    },
    {
      name: "0",
      s: "a",
      t: "aa",
      expected: "",
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = minWindow(scenerio.s, scenerio.t);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
