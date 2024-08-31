// Top down approach
export function heightTreeV1(root) {
  const helper = (node = root, depth = 0) => {
    depth++;
    height = Math.max(depth, height);

    if (node.left) {
      helper(node.left, depth);
    }

    if (node.right) {
      helper(node.right, depth);
    }
  };

  if (root === null) {
    return 0;
  }

  let height = 1;

  helper();

  return height;
}

// Bottom up approach
export function heightTree(root) {
  if (root === null) {
    return 0;
  }

  const leftHeight = heightTree(root.left);
  const rightHeight = heightTree(root.right);

  return 1 + Math.max(leftHeight, rightHeight);
}
