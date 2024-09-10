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
export function heightTreeV2(root) {
  if (root === null) {
    return 0;
  }

  const leftHeight = heightTree(root.left);
  const rightHeight = heightTree(root.right);

  return 1 + Math.max(leftHeight, rightHeight);
}

export function heightTree(root) {
  const cache = {};

  const height = (node) => {
    if (node === null) return 0;
    if (cache[node]) return cache[node];

    const result = 1 + Math.max(height(node.left), height(node.right));
    cache[node] = result;
    return result;
  };

  return height(root);
}
