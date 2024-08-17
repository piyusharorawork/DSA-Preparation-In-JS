export function diameterOfBinaryTree(root) {
  const depth = (node = root, diameter = 0) => {
    if (node === null) {
      return 0;
    }

    const leftDepth = depth(node.left, diameter);
    const rightDepth = depth(node.right, diameter);

    diameter = Math.max(leftDepth + rightDepth, diameter);

    return 1 + Math.max(leftDepth, rightDepth);
  };

  depth();
  return diameter;
}
