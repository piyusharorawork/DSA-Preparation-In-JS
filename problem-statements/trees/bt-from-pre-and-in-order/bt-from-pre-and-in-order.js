import { TreeNode } from "../../../data-structures/binary-tree/binary-tree";

export function buildTreeV1(preorder, inorder) {
  const N = preorder.length;
  if (N === 1) return new TreeNode(preorder[0]);

  //build the index map for in order
  const indexMapInOrder = {};
  for (let i = 0; i < N; i++) {
    indexMapInOrder[inorder[i]] = i;
  }

  const helper = (
    preOrderIdx = 0,
    inOrderLeftIdx = 0,
    inOrderRightIdx = N - 1
  ) => {
    if (preOrderIdx >= N || inOrderLeftIdx > inOrderRightIdx) return null;

    const preOrderVal = preorder[preOrderIdx];
    const node = new TreeNode(preOrderVal);
    const inOrderIdx = indexMapInOrder[node.val];
    // it must be in the left side of inOrderIdx
    node.left = helper(preOrderIdx + 1, inOrderLeftIdx, inOrderIdx - 1);
    // it must be in the right side of inOrderIdx
    node.right = helper(
      preOrderIdx + 1 + inOrderIdx - inOrderLeftIdx,
      inOrderIdx + 1,
      inOrderRightIdx
    );

    return node;
  };

  return helper();
}

export function buildTree(preorder, inorder) {
  const N = preorder.length;

  const inIndexMap = {};
  inorder.forEach((item, index) => {
    inIndexMap[item] = index;
  });

  const createTreeNode = (preIdx, left, right) => {
    if (preIdx >= N || left > right) return null;

    const node = new TreeNode(preorder[preIdx]);
    const inIdx = inIndexMap[node.val];

    const leftSubtreeSize = inIdx - left;

    node.left = createTreeNode(preIdx + 1, left, inIdx - 1);
    node.right = createTreeNode(preIdx + 1 + leftSubtreeSize, inIdx + 1, right);
    return node;
  };

  return createTreeNode(0, 0, N - 1);
}
