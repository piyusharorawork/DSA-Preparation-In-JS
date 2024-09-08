import { test, describe, expect } from "vitest";
import { calculate } from "./basic-calculator";

describe("basic calculator", () => {
  const scenerios = [
    {
      name: "2",
      s: "1 + 1",
      expected: 2,
    },
    {
      name: "3",
      s: "2 - 1+  2",
      expected: 3,
    },
    {
      name: "21",
      s: "10+  11",
      expected: 21,
    },
    {
      name: "-1",
      s: "10-  11",
      expected: -1,
    },
    {
      name: "23",
      s: "(1+(4+5+2)-3)+(6+8)",
      expected: 23,
    },
    {
      name: "3",
      s: "1-(     -2)",
      expected: 3,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = calculate(scenerio.s);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
