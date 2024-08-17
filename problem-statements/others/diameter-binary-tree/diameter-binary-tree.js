export function diameterOfBinaryTree(root) {
  let diameter = 0;

  const depth = (node = root) => {
    if (node === null) return 0;

    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);

    const nodeDepth = 1 + Math.max(leftDepth, rightDepth);

    diameter = Math.max(leftDepth + rightDepth, diameter);

    return nodeDepth;
  };

  depth();
  return diameter;
}
