import { test, describe, expect } from "vitest";
import { TimeMap } from "./time-based-kv-store";

describe("time based-kv-store", () => {
  test("sample", () => {
    const timeMap = new TimeMap();
    timeMap.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1.
    expect(timeMap.get("foo", 1)).toBe("bar"); // return "bar"
    expect(timeMap.get("foo", 3)).toBe("bar"); // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
    timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
    expect(timeMap.get("foo", 4)).toBe("bar2"); // return "bar2"
    expect(timeMap.get("foo", 5)).toBe("bar2"); // return "bar2"
  });
});
