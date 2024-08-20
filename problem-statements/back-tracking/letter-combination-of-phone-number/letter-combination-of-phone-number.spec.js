import { test, describe, expect } from "vitest";
import { letterCombinations } from "./letter-combination-of-phone-number";
import { stringArrayMatch } from "../../../helpers/array-helpers";

describe("letter combination-of-phone-number", () => {
  const scenerios = [
    {
      name: "2 digits",
      digits: "23",
      expected: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
    },
    {
      name: "0 digits",
      digits: "",
      expected: [],
    },
    {
      name: "1 digit",
      digits: "2",
      expected: ["a", "b", "c"],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = letterCombinations(scenerio.digits);
      expect(stringArrayMatch(actual, scenerio.expected)).toBeTruthy();
    });
  }
});
