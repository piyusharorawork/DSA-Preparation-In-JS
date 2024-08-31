import { test, describe, expect } from "vitest";
import { myAtoi } from "./a-to-i";

describe("a to-i", () => {
  const scenerios = [
    {
      name: `
      no leading whitespace
      no sign
      starts with digit character
      val is in 32 bit range
      `,
      s: "123",
      expected: 123,
    },
    {
      name: `
      leading whitespace
      no sign
      remaining starts  with digit character
      val is in 32 bit range
      `,
      s: "  123",
      expected: 123,
    },
    {
      name: `
      no leading whitespace
      no sign
      remaining starts  with digit character
      val is in 32 bit range
      `,
      s: "123 number of lines",
      expected: 123,
    },
    {
      name: `
      no leading whitespace
      no sign
      string does not start with digit character
      `,
      s: "number of lines are 123",
      expected: 0,
    },
    {
      name: `
       -91283472332
      `,
      s: "-91283472332",
      expected: -2147483648,
    },
    {
      name: `
       no leading whitespace
      no sign
      starts with digit character
      val is not in 32 bit range
      `,
      s: "21474836460",
      expected: 2147483647,
    },
    {
      name: `
       no leading whitespace
      no sign
      starts with digit character
      val is in 32 bit range
      `,
      s: "0-1",
      expected: 0,
    },
    {
      name: `
       +1
      `,
      s: "+1",
      expected: 1,
    },
    {
      name: `
       +-12
      `,
      s: "+-12",
      expected: 0,
    },
  ];

  for (const scenerio of scenerios) {
    test(scenerio.name, () => {
      const actual = myAtoi(scenerio.s);
      expect(actual).toStrictEqual(scenerio.expected);
    });
  }
});
