import { test, describe, expect } from "vitest";
import { isValid } from "./valid-parentheses";

describe("valid parentheses", () => {
  const scenerios = [
    {
      name: "valid with 2 brackets",
      s: "()",
      expected: true,
    },
    {
      name: "valid with 6 brackets",
      s: "()[]{}",
      expected: true,
    },
    {
      name: "invalid with 2 brackets",
      s: "(]",
      expected: false,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = isValid(scenerio.s);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
