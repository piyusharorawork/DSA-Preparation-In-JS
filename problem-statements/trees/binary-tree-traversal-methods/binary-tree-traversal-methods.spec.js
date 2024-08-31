import { expect, describe, test } from "vitest";
import {
  inOrderTraversal,
  preOrderTraversal,
  postOrderTraversal,
} from "./binary-tree-traversal-methods";
import { createBinaryTree } from "../../../data-structures/binary-tree/binary-tree";

describe("binary tree traversal methods", () => {
  test("pre order traversal", () => {
    const root = createBinaryTree([
      1,
      2,
      3,
      4,
      5,
      null,
      9,
      null,
      null,
      6,
      7,
      10,
      null,
    ]);
    const actual = preOrderTraversal(root);
    expect(actual).toStrictEqual([1, 2, 4, 5, 6, 7, 3, 9, 10]);
  });

  test("in order traversal", () => {
    const root = createBinaryTree([
      1,
      2,
      3,
      4,
      5,
      null,
      9,
      null,
      null,
      6,
      7,
      10,
      null,
    ]);
    const actual = inOrderTraversal(root);
    expect(actual).toStrictEqual([4, 2, 6, 5, 7, 1, 3, 10, 9]);
  });

  test("post order traversal", () => {
    const root = createBinaryTree([
      1,
      2,
      3,
      4,
      5,
      null,
      9,
      null,
      null,
      6,
      7,
      10,
      null,
    ]);
    const actual = postOrderTraversal(root);
    expect(actual).toStrictEqual([4, 6, 7, 5, 2, 10, 9, 3, 1]);
  });
});
