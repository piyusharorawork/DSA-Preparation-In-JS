import { test, describe, expect } from "vitest";
import { letterCasePermutation } from "./permuation-with-case-change";
import { stringArrayMatch } from "../../../helpers/array-helpers";

describe("permuation with-case-change", () => {
  const scenerios = [
    {
      name: "ex1",
      s: "a1b2",
      expected: ["a1b2", "a1B2", "A1b2", "A1B2"],
    },
    {
      name: "ex2",
      s: "3z4",
      expected: ["3z4", "3Z4"],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = letterCasePermutation(scenerio.s);
      expect(stringArrayMatch(actual, scenerio.expected)).toBeTruthy();
    });
  }
});
