import { test, describe, expect } from "vitest";
import { LRUCache } from "./lru-cache";

describe("lru cache", () => {
  test("sample", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1); // cache is {1=1}
    cache.put(2, 2); // cache is {1=1, 2=2}
    expect(cache.get(1)).toBe(1);
    cache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    expect(cache.get(2)).toBe(-1); // returns -1 (not found)
    cache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
    cache.get(1); // return -1 (not found)
    cache.get(3); // return 3
    cache.get(4); // return 4
  });
  test("case 1", () => {
    const cache = new LRUCache(1);
    cache.put(2, 1);
    expect(cache.get(2)).toBe(1);
  });
  test("case 2", () => {
    const cache = new LRUCache(1);
    cache.put(2, 1);
    expect(cache.get(2)).toBe(1);
    cache.put(3, 2);
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(3)).toBe(2);
  });

  test("case 3", () => {
    const cache = new LRUCache(2);
    expect(cache.get(2)).toBe(-1);
    cache.put(2, 6); // 2:6,
    expect(cache.get(1)).toBe(-1);
    cache.put(1, 5); // 2:6, 1:5
    cache.put(1, 2); // 2:6, 1:2
    expect(cache.get(1)).toBe(2);
    expect(cache.get(2)).toBe(6);
  });

  test("case 4", () => {
    const cache = new LRUCache(2);
    cache.put(2, 1); // 2:1
    cache.put(1, 1); // 1:1, 2:1
    cache.put(2, 3); // 2:3 , 1:1
    cache.put(4, 1); // 4:1, 2:3
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(3);
  });

  test("case 5", () => {
    const cache = new LRUCache(2);
    cache.put(2, 1); // 2:1
    cache.put(3, 2); // 3:2 2:1
    expect(cache.get(3)).toBe(2);
    expect(cache.get(2)).toBe(1);
    cache.put(4, 3); // 4:3 2:1
    expect(cache.get(2)).toBe(1);
    // expect(cache.get(3)).toBe(-1);
    // expect(cache.get(4)).toBe(3);
  });
});
