import { test, describe, expect } from "vitest";
import { binaryMore1Than0 } from "./binary-more-1-than-0";
import { stringArrayMatch } from "../../../helpers/array-helpers";

describe("binary more-1-than-0", () => {
  const scenerios = [
    {
      name: "ex1",
      n: 2,
      expected: ["11", "10"],
    },
    {
      name: "ex2",
      n: 3,
      expected: ["111", "110", "101"],
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = binaryMore1Than0(scenerio.n);
      expect(stringArrayMatch(actual, scenerio.expected)).toBeTruthy();
    });
  }
});
