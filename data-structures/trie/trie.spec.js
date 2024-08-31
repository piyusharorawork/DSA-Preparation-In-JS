import { Trie } from "./trie";
import { describe, expect, test } from "vitest";

describe("trie implmentation", () => {
  test("sample", () => {
    const trie = new Trie();
    trie.insert("apple");
    expect(trie.search("apple")).toBe(true);
    expect(trie.search("app")).toBe(false);
    expect(trie.startsWith("app")).toBe(true);
    trie.insert("app");
    expect(trie.search("app")).toBe(true);
  });
});
