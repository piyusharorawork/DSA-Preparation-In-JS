export function getNodesTreeV1(root) {
  let count = 0;
  const helper = (node = root) => {
    count++;
    if (node.left) {
      helper(node.left);
    }
    if (node.right) {
      helper(node.right);
    }
  };

  if (root === null) {
    return 0;
  }

  helper();
  return count;
}

// Bottom Up Approach
export function getNodesTree(root) {
  if (root === null) {
    return 0;
  }

  return 1 + getNodesTree(root.left) + getNodesTree(root.right);
}
