import { test, describe, expect } from "vitest";
import { permuationString } from "./permuation-string";
import { stringArrayMatch } from "../../../helpers/array-helpers";

describe("permuation string", () => {
  const scenerios = [
    {
      name: "ex1",
      s: "ABC",
      expected: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"],
    },
    {
      name: "ex2",
      s: "ABSG",
      expected: [
        "ABGS",
        "ABSG",
        "AGBS",
        "AGSB",
        "ASBG",
        "ASGB",
        "BAGS",
        "BASG",
        "BGAS",
        "BGSA",
        "BSAG",
        "BSGA",
        "GABS",
        "GASB",
        "GBAS",
        "GBSA",
        "GSAB",
        "GSBA",
        "SABG",
        "SAGB",
        "SBAG",
        "SBGA",
        "SGAB",
        "SGBA",
      ],
    },
    {
      name: "ex3",
      s: "AA",
      expected: ["AA"],
    },
    {
      name: "ex4",
      s: "ABA",
      expected: ["ABA", "AAB", "BAA"],
    },
    {
      name: "ex5",
      s: "ABCA",
      expected: [
        "AABC",
        "AACB",
        "ABAC",
        "ABCA",
        "ACBA",
        "ACAB",
        "BAAC",
        "BACA",
        "BCAA",
        "CABA",
        "CAAB",
        "CBAA",
      ],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = permuationString(scenerio.s);
      expect(stringArrayMatch(actual, scenerio.expected)).toBeTruthy();
    });
  }
});
