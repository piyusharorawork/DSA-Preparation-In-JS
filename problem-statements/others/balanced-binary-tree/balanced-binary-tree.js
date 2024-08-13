export function isBalancedV1(root) {
  let isBalancedTree = true;

  const height = (node) => {
    if (node === null) {
      return 0;
    }

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      isBalancedTree = false;
    }

    return 1 + Math.max(leftHeight, rightHeight);
  };

  if (root === null) {
    return true;
  }

  height(root);

  return isBalancedTree;
}

export function isBalanced(root) {
  const modifiedHeight = (node) => {
    if (node === null) {
      return 0;
    }

    const leftHeight = modifiedHeight(node.left);
    const rightHeight = modifiedHeight(node.right);

    if (leftHeight === -1 || rightHeight === -1) {
      return -1;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    return 1 + Math.max(leftHeight, rightHeight);
  };

  if (root === null) {
    return true;
  }

  return modifiedHeight(root) !== -1;
}
